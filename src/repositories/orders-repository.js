const { query, getClient } = require("../database");

class OrdersRepository {
    async findAll() {
        const result = await query(`
            SELECT orders.*, customers.id AS "customer.id", customers.name AS "customer.name", customers.email AS "customer.email"
            FROM orders 
            JOIN customers ON customers.id = orders.customer_id;
        `);
        return result.rows;
    }

    async findById(id) {
        const orderResult = await query(`
            SELECT orders.*, customers.id AS "customer.id", customers.name AS "customer.name", customers.email AS "customer.email"
            FROM orders 
            JOIN customers ON customers.id = orders.customer_id
            WHERE orders.id = $1;
        `, [id]);

        return orderResult.rows.length ? orderResult.rows[0] : null;
    }

    async create(customerId, orderProducts) {
        const storedOrderProducts = await query(
            `SELECT * FROM products WHERE id = ANY($1::int[]);`,
            [orderProducts.map(product => product.id)]
        );

        let orderTotal = 0;
        const populatedOrderProducts = storedOrderProducts.rows.map(row => {
            const { quantity } = orderProducts.find(product => product.id === row.id);
            orderTotal += +row.price * quantity;
            return { product: row, quantity };
        });

        const dbClient = await getClient();
        let response;

        try {
            await dbClient.query("BEGIN");

            const orderCreationResult = await dbClient.query(
                `INSERT INTO orders (customer_id, total) VALUES ($1, $2) RETURNING *;`,
                [customerId, orderTotal]
            );

            const order = orderCreationResult.rows[0];

            for (const entry of populatedOrderProducts) {
                await dbClient.query(
                    `INSERT INTO order_products (order_id, product_id, quantity) VALUES ($1, $2, $3);`,
                    [order.id, entry.product.id, entry.quantity]
                );
            }

            await dbClient.query("COMMIT");
            response = order;
        } catch (error) {
            await dbClient.query("ROLLBACK");
            throw error;
        } finally {
            dbClient.release();
        }

        return response;
    }

    async delete(id) {
        await query(`DELETE FROM orders WHERE id = $1;`, [id]);
        return { success: true, message: "Pedido deletado com sucesso!" };
    }
}

module.exports = new OrdersRepository();
