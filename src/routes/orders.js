const express = require("express");
const ordersController = require("../controllers/orders-controller");
const authMiddleware = require("../middlewares/auth");
const validate = require("../middlewares/validate");
const { orderSchema } = require("../validators/orderValidator");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Pedidos
 *   description: Endpoints para gerenciamento de pedidos
 */

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Lista todos os pedidos
 *     security:
 *       - BearerAuth: []
 *     tags: [Pedidos]
 *     responses:
 *       200:
 *         description: Lista de pedidos retornada com sucesso
 */
router.get("/", authMiddleware, ordersController.index);

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Cria um novo pedido
 *     security:
 *       - BearerAuth: []
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerId:
 *                 type: integer
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     quantity:
 *                       type: integer
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 */
router.post("/", authMiddleware, validate(orderSchema), ordersController.create);

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Obtém um pedido pelo ID
 *     security:
 *       - BearerAuth: []
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido encontrado
 */
router.get("/:id", authMiddleware, ordersController.show);

/**
 * @swagger
 * /api/orders/{id}:
 *   delete:
 *     summary: Deleta um pedido pelo ID
 *     security:
 *       - BearerAuth: []
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido deletado com sucesso
 */
router.delete("/:id", authMiddleware, ordersController.delete);

module.exports = router;
