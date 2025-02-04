const request = require("supertest");
const app = require("../server");

describe("Testando Rotas de Clientes", () => {
    let token;
    let customerId;

    beforeAll(async () => {
        // Criar um usuário de teste antes de rodar os testes
        await request(app).post("/api/auth/register").send({
            name: "Teste Cliente",
            email: "cliente@email.com",
            password: "senha123"
        });

        // Fazer login para obter o token JWT
        const loginResponse = await request(app).post("/api/auth/login").send({
            email: "cliente@email.com",
            password: "senha123"
        });

        token = loginResponse.body.token;
        expect(token).toBeDefined(); // Verifica se o token foi gerado
    });

    test("Deve criar um novo cliente", async () => {
        const res = await request(app)
            .post("/api/customers")
            .set("Authorization", `Bearer ${token}`)
            .send({
                name: "Cliente Teste",
                email: `cliente${Date.now()}@email.com`
            });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("id");
        customerId = res.body.id;
    });

    test("Deve listar clientes", async () => {
        const res = await request(app)
            .get("/api/customers")
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
