const express = require("express");
const customersController = require("../controllers/customers-controller");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Endpoints para gerenciamento de clientes
 */

/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Lista todos os clientes
 *     security:
 *       - BearerAuth: []
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes retornada com sucesso
 *       403:
 *         description: Acesso negado (token JWT ausente ou inválido)
 */

router.get("/", authMiddleware, customersController.index);

/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: Cria um novo cliente
 *     security:
 *       - BearerAuth: []
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: João Silva
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *       400:
 *         description: Erro na requisição
 *       403:
 *         description: Acesso negado (token JWT ausente ou inválido)
 */

router.post("/", authMiddleware, customersController.create);

/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     summary: Obtém um cliente pelo ID
 *     security:
 *       - BearerAuth: []
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       404:
 *         description: Cliente não encontrado
 *       403:
 *         description: Acesso negado (token JWT ausente ou inválido)
 */

router.get("/:id", authMiddleware, customersController.show);

/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     summary: Atualiza um cliente pelo ID
 *     security:
 *       - BearerAuth: []
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Maria Souza
 *               email:
 *                 type: string
 *                 example: maria@email.com
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 *       404:
 *         description: Cliente não encontrado
 *       403:
 *         description: Acesso negado (token JWT ausente ou inválido)
 */

router.put("/:id", authMiddleware, customersController.update);

/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     summary: Deleta um cliente pelo ID
 *     security:
 *       - BearerAuth: []
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Cliente deletado com sucesso
 *       404:
 *         description: Cliente não encontrado
 *       403:
 *         description: Acesso negado (token JWT ausente ou inválido)
 */

router.delete("/:id", authMiddleware, customersController.delete);

module.exports = router;

