const { query } = require("../database");

class CustomersRepository {
    async findAll() {
        const result = await query(`SELECT * FROM customers;`);
        return result.rows;
    }

    async findById(id) {
        const result = await query(`SELECT * FROM customers WHERE id = $1;`, [id]);
        return result.rows.length ? result.rows[0] : null;
    }

    async create({ name, email }) {
        const result = await query(
            `INSERT INTO customers (name, email) VALUES ($1, $2) RETURNING *;`,
            [name, email]
        );
        return result.rows[0];
    }

    async update(id, { name, email }) {
        const result = await query(
            `UPDATE customers SET name = $1, email = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *;`,
            [name, email, id]
        );
        return result.rows[0];
    }

    async delete(id) {
        const result = await query(`DELETE FROM customers WHERE id = $1 RETURNING *;`, [id]);
        return result.rows.length ? result.rows[0] : null;
    }
}

module.exports = new CustomersRepository();
