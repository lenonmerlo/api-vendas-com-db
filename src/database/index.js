require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

// Tratamento de erro na conexão
pool.on("error", (err) => {
    console.error("Erro inesperado no banco de dados:", err);
    process.exit(-1);
});

// Função para executar queries
async function query(queryString, params) {
    try {
        return await pool.query(queryString, params);
    } catch (error) {
        console.error("Erro na query do banco:", error);
        throw error;
    }
}

// Função para obter um cliente do pool (para transações)
async function getClient() {
    try {
        return await pool.connect();
    } catch (error) {
        console.error("Erro ao obter conexão com o banco:", error);
        throw error;
    }
}

module.exports = { query, getClient };
