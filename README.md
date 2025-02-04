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

## 📌 📂 Estrutura de Pastas do Projeto Backend
```pgsql
06-api-com-db-particionado/  ← 📂 Diretório raiz do projeto
│── node_modules/            ← 📂 Dependências do Node.js (não versionado)
│── src/                     ← 📂 Código-fonte principal
│   ├── config/              ← 📂 Configurações (Swagger, Logger, Banco de Dados)
│   │   ├── swagger.js       ← Configuração do Swagger UI
│   │
│   ├── controllers/         ← 📂 Controladores (Lógica das rotas)
│   │   ├── auth-controller.js      ← Lida com autenticação (login, registro)
│   │   ├── customers-controller.js ← Gerencia clientes
│   │   ├── orders-controller.js    ← Gerencia pedidos
│   │   ├── products-controller.js  ← Gerencia produtos
│   │
│   ├── database/            ← 📂 Configuração do banco de dados
│   │   ├── index.js         ← Conexão com PostgreSQL
│   │   ├── sync-database.js ← Script para sincronizar o banco
│   │
│   ├── middlewares/         ← 📂 Middlewares (Autenticação, Validação e Erros)
│   │   ├── auth.js          ← Middleware para autenticação JWT
│   │   ├── errorHandler.js  ← Middleware global de tratamento de erros
│   │   ├── validate.js      ← Middleware para validação de inputs
│   │
│   ├── repositories/        ← 📂 Repositórios (Acesso ao Banco de Dados)
│   │   ├── auth-repository.js      ← Acesso aos dados de autenticação
│   │   ├── customers-repository.js ← Acesso aos dados de clientes
│   │   ├── orders-repository.js    ← Acesso aos dados de pedidos
│   │   ├── products-repository.js  ← Acesso aos dados de produtos
│   │
│   ├── routes/              ← 📂 Rotas da API (Definição de Endpoints)
│   │   ├── auth.js          ← Rotas de autenticação (Login, Registro)
│   │   ├── customers.js     ← Rotas de clientes (CRUD)
│   │   ├── orders.js        ← Rotas de pedidos (CRUD)
│   │   ├── products.js      ← Rotas de produtos (CRUD)
│   │
│   ├── services/            ← 📂 Serviços (Regras de Negócio)
│   │   ├── auth-service.js      ← Lógica de autenticação e geração de tokens
│   │   ├── customers-service.js ← Regras de clientes
│   │   ├── orders-service.js    ← Regras de pedidos
│   │   ├── products-service.js  ← Regras de produtos
│   │
│   ├── tests/               ← 📂 Testes Automatizados (Jest + Supertest)
│   │   ├── auth.test.js          ← Testes para autenticação
│   │   ├── customers.test.js      ← Testes para clientes
│   │   ├── order.test.js          ← Testes para pedidos
│   │   ├── products.test.js       ← Testes para produtos
│   │
│   ├── utils/               ← 📂 Utilitários (Funções auxiliares)
│   │   ├── jwt.js           ← Funções para geração e verificação de tokens JWT
│   │
│   ├── validators/          ← 📂 Validações (Joi)
│   │   ├── authValidator.js  ← Validação dos inputs de autenticação
│   │   ├── orderValidator.js ← Validação dos inputs de pedidos
│   │
│   ├── router.js            ← Carrega todas as rotas da API
│   ├── server.js            ← Ponto de entrada da API (Express)
│
│── .env                     ← Variáveis de ambiente (Banco, JWT Secret)
│── .gitignore               ← Ignorar arquivos desnecessários no Git
│── jest.config.js           ← Configuração dos testes (Jest)
│── LICENSE                  ← Licença MIT do projeto
│── package.json             ← Dependências e scripts do projeto
│── package-lock.json        ← Versões exatas das dependências
```

## 📌 Explicação da Arquitetura

✅ controllers/ → Controladores que recebem as requisições e chamam os serviços.

✅ services/ → Contém a lógica de negócios da aplicação.

✅ repositories/ → Responsáveis por acessar e manipular dados no banco.

✅ middlewares/ → Funções intermediárias como autenticação, erros e validação.

✅ routes/ → Define os endpoints da API e conecta aos controllers.

✅ validators/ → Faz a validação de inputs usando Joi.

✅ tests/ → Contém testes automatizados com Jest e Supertest.

✅ utils/ → Funções auxiliares, como manipulação de tokens JWT.

✅ database/ → Configuração e sincronização do PostgreSQL.

✅ config/ → Configurações do projeto, como Swagger e Logger.

✅ server.js → Arquivo principal que inicia o servidor Express.



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


