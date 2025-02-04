const request = require("supertest");
const app = require("../server");

describe("Testando Rotas de Produtos", () => {
    let productId;

    test("Deve criar um novo produto", async () => {
        const res = await request(app)
            .post("/api/products")
            .send({
                name: "Produto Teste",
                description: "Descrição do produto",
                price: 99.99,
                stockQuantity: 10,
                isActive: true
            });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("id");
        productId = res.body.id;
    });

    test("Deve listar produtos", async () => {
        const res = await request(app).get("/api/products");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test("Deve buscar um produto por ID", async () => {
        const res = await request(app).get(`/api/products/${productId}`);
        expect(res.statusCode).toBe(200);
    });

    test("Deve deletar um produto", async () => {
        const res = await request(app).delete(`/api/products/${productId}`);
        expect(res.statusCode).toBe(200);
    });
});
