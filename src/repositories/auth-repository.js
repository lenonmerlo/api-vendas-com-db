const { query } = require("../database");

class AuthRepository {
    async findByEmail(email) {
        const result = await query(`SELECT * FROM users WHERE email = $1;`, [email]);
        return result.rows.length ? result.rows[0] : null;
    }

    async createUser(name, email, hashedPassword) {
        const result = await query(
            `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;`,
            [name, email, hashedPassword]
        );
        return result.rows[0];
    }
}

module.exports = new AuthRepository();
