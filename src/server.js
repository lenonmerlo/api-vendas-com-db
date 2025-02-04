require("dotenv").config();
const express = require("express");
const router = require("./router");
const errorHandler = require("./middlewares/errorHandler");
const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./config/swagger")

const app = express();

app.use(express.json());
app.use("/api", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Rota do Swagger
app.use(errorHandler);

// Iniciar o servidor APENAS se não estiver rodando testes
if (process.env.NODE_ENV !== "test") {
    const PORT = process.env.PORT || 3000;
    const server = app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
    module.exports = server; // Exportando para os testes
} else {
    module.exports = app; // Exportando apenas o app para Supertest
}
