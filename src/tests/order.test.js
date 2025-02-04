const request = require("supertest");
const app = require("../server");

describe("Testando Rotas de Pedidos", () => {
    let token;
    let orderId;
    let customerId;
    let productId;

    beforeAll(async () => {
        // Criar um usuário de teste antes dos testes
        await request(app).post("/api/auth/register").send({
            name: "Teste Pedido",
            email: "pedido@email.com",
            password: "senha123"
        });

        // Fazer login para obter o token JWT
        const loginResponse = await request(app).post("/api/auth/login").send({
            email: "pedido@email.com",
            password: "senha123"
        });

        token = loginResponse.body.token;
        expect(token).toBeDefined(); // Verifica se o token foi gerado

        // Criar um cliente de teste
        const customerResponse = await request(app)
            .post("/api/customers")
            .set("Authorization", `Bearer ${token}`)
            .send({ name: "Cliente Pedido", email: `pedido${Date.now()}@email.com` });

        customerId = customerResponse.body.id;

        // Criar um produto de teste
        const productResponse = await request(app)
            .post("/api/products")
            .send({ name: "Produto Teste", description: "Produto de Teste", price: 100, stockQuantity: 10, isActive: true });

        productId = productResponse.body.id;
    });

    test("Deve criar um pedido", async () => {
        const res = await request(app)
            .post("/api/orders")
            .set("Authorization", `Bearer ${token}`)
            .send({
                customerId: customerId,
                products: [{ id: productId, quantity: 2 }]
            });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("id");
        orderId = res.body.id;
    });

    test("Deve listar pedidos", async () => {
        const res = await request(app)
            .get("/api/orders")
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
