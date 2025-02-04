const { query } = require("../database");

class ProductsRepository {
    async findAll() {
        const result = await query(`SELECT * FROM products;`);
        return result.rows;
    }

    async findById(id) {
        const result = await query(`SELECT * FROM products WHERE id = $1;`, [id]);
        return result.rows.length ? result.rows[0] : null;
    }

    async create({ name, description, price, stockQuantity, isActive }) {
        const result = await query(
            `INSERT INTO products (name, description, price, stock_quantity, is_active) 
             VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
            [name, description, price, stockQuantity, isActive]
        );
        return result.rows[0];
    }

    async update(id, attributes) {
        const existingProduct = await this.findById(id);
        if (!existingProduct) return null;

        const updatedProduct = { ...existingProduct, ...attributes };
        await query(
            `UPDATE products SET name = $1, description = $2, price = $3, stock_quantity = $4, 
             is_active = $5, updated_at = CURRENT_TIMESTAMP WHERE id = $6;`,
            [updatedProduct.name, updatedProduct.description, updatedProduct.price, 
             updatedProduct.stock_quantity, updatedProduct.isActive, id]
        );
        return updatedProduct;
    }

    async delete(id) {
        await query(`DELETE FROM products WHERE id = $1;`, [id]);
        return { message: "Produto deletado com sucesso!" };
    }
}

module.exports = new ProductsRepository();
