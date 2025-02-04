const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Pedidos - Documentação",
            version: "1.0.0",
            description: "Documentação da API para gerenciamento de pedidos, clientes e produtos."
        },
        servers: [
            { url: "http://localhost:3000", description: "Servidor Local" }
        ],
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        security: [
            {
                BearerAuth: []
            }
        ]
    },
    apis: ["./src/routes/*.js"] // Certifique-se de que o caminho está correto
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;
