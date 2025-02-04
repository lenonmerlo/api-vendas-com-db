const request = require("supertest");
const app = require("../server");

describe("Testando Autenticação", () => {
    let userEmail = `test${Date.now()}@email.com`;

    test("Deve registrar um novo usuário", async () => {
        const res = await request(app).post("/api/auth/register").send({
            name: "Usuário Teste",
            email: userEmail,
            password: "senha123"
        });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("user");
    });

    test("Deve logar com um usuário existente", async () => {
        const res = await request(app).post("/api/auth/login").send({
            email: userEmail,
            password: "senha123"
        });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("token");
    });

    test("Deve falhar ao logar com senha errada", async () => {
        const res = await request(app).post("/api/auth/login").send({
            email: userEmail,
            password: "senha_errada"
        });

        expect(res.statusCode).toBe(401);
    });
});
