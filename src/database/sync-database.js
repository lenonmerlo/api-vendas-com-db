const { query } = require("./index");

async function syncDatabase() {
    try {
        // Criar tabela de usuários
        await query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT now(),
                updated_at TIMESTAMP DEFAULT now()
            );
        `);
        console.log('Tabela "users" criada.');

        // Criar tabela de clientes
        await query(`
            CREATE TABLE IF NOT EXISTS customers (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                created_at TIMESTAMP DEFAULT now(),
                updated_at TIMESTAMP DEFAULT now()
            );
        `);
        console.log('Tabela "customers" criada.');

        // Criar tabela de produtos
        await query(`
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT,
                price DECIMAL(10, 2) NOT NULL,
                stock_quantity INT NOT NULL,
                created_at TIMESTAMP DEFAULT now(),
                updated_at TIMESTAMP DEFAULT now(),
                is_active BOOLEAN DEFAULT TRUE
            );
        `);
        console.log('Tabela "products" criada.');

        // Criar tabela de pedidos
        await query(`
            CREATE TABLE IF NOT EXISTS orders (
                id SERIAL PRIMARY KEY,
                customer_id INT NOT NULL,
                total DECIMAL(10, 2) NOT NULL DEFAULT 0,
                created_at TIMESTAMP DEFAULT now(),
                updated_at TIMESTAMP DEFAULT now(),
                FOREIGN KEY (customer_id) REFERENCES customers (id) ON DELETE CASCADE
            );
        `);
        console.log('Tabela "orders" criada.');

        // Criar tabela de relacionamento entre pedidos e produtos
        await query(`
            CREATE TABLE IF NOT EXISTS order_products (
                order_id INT NOT NULL,
                product_id INT NOT NULL,
                quantity INT NOT NULL DEFAULT 1,
                created_at TIMESTAMP DEFAULT now(),
                updated_at TIMESTAMP DEFAULT now(),
                PRIMARY KEY (order_id, product_id),
                FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE,
                FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
            );
        `);
        console.log('Tabela "order_products" criada.');

    } catch (error) {
        console.error("Erro ao sincronizar banco de dados:", error);
    } finally {
        process.exit(1);
    }
}

// Executar a sincronização
syncDatabase();
