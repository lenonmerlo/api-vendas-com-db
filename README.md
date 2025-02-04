# 🚀 API REST para Gerenciamento de Pedidos, Clientes e Produtos

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express.js-4.x-lightgrey)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14.x-blue)
![Swagger](https://img.shields.io/badge/Swagger-API%20Docs-brightgreen)
![Tests](https://img.shields.io/badge/Tests-Jest%20%26%20Supertest-orange)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

API RESTful desenvolvida em **Node.js** com **Express** e **PostgreSQL** para o gerenciamento de pedidos, clientes e produtos.  
A API conta com **autenticação JWT**, **documentação Swagger** e **testes automatizados**.  

## 📌 Tecnologias Utilizadas
- **Node.js** + **Express** → Backend
- **PostgreSQL** → Banco de Dados
- **JWT (JSON Web Token)** → Autenticação
- **Jest & Supertest** → Testes Automatizados
- **Swagger UI** → Documentação da API
- **Winston** → Logs
- **Dotenv** → Gerenciamento de variáveis de ambiente

---

## 📌 Como Rodar a API 🚀

### **1️⃣ Clone este repositório**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### **2️⃣ Instale as dependências**
```bash
npm install
```

### **3️⃣ Configure as variáveis de ambiente**
Crie um arquivo .env na raiz do projeto e defina:
```env
DATABASE_URL=postgres://usuario:senha@localhost:5432/seu-banco
JWT_SECRET=seu_token_secreto
PORT=3000
```

### **4️⃣ Inicie o servidor**
```bash
npm run dev
```
A API estará rodando em http://localhost:3000 🚀

## 📌 Rotas da API 📡
Todas as rotas podem ser acessadas via Swagger UI em:
```bash
http://localhost:3000/api-docs
```

## 🛠️ Autenticação
POST /api/auth/login → Login com e-mail e senha (Retorna JWT)

POST /api/auth/register → Registra um novo usuário

👤 **Clientes**

GET /api/customers → Lista todos os clientes

GET /api/customers/{id} → Busca um cliente pelo ID

POST /api/customers → Cria um novo cliente

PUT /api/customers/{id} → Atualiza um cliente

DELETE /api/customers/{id} → Remove um cliente

📦 **Produtos**

GET /api/products → Lista todos os produtos

GET /api/products/{id} → Busca um produto pelo ID

POST /api/products → Cria um novo produto

PUT /api/products/{id} → Atualiza um produto

DELETE /api/products/{id} → Remove um produto

📜 **Pedidos**

GET /api/orders → Lista todos os pedidos

GET /api/orders/{id} → Busca um pedido pelo ID

POST /api/orders → Cria um novo pedido

DELETE /api/orders/{id} → Remove um pedido

## 📌 Testes Automatizados 🧪
Os testes são feitos com Jest + Supertest. Para rodar os testes:
```bash
npm test
```

## 📌 Contribuição 👨‍💻
Se quiser contribuir com este projeto:
1. Faça um fork
2. Crie uma branch (git checkout -b feature-nova)
3. Commit suas mudanças (git commit -m "Adiciona nova feature")
4. Push para a branch (git push origin feature-nova)
5. Abra um Pull Request

## 📌 Licença 📜
Este projeto está sob a Licença MIT.

## 📌 Autor 👤
LenonTM
📧 lenontm@gmail.com


