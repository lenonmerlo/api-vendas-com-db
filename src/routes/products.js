const express = require("express");
const productsController = require("../controllers/products-controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Endpoints para gerenciamento de produtos
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Notebook Gamer
 *                   description:
 *                     type: string
 *                     example: Notebook com processador i7 e 16GB RAM
 *                   price:
 *                     type: number
 *                     example: 3500.00
 *                   stockQuantity:
 *                     type: integer
 *                     example: 10
 *                   isActive:
 *                     type: boolean
 *                     example: true
 */
router.get("/", productsController.index);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Teclado Mecânico RGB
 *               description:
 *                 type: string
 *                 example: Teclado gamer com switches mecânicos e iluminação RGB
 *               price:
 *                 type: number
 *                 example: 299.99
 *               stockQuantity:
 *                 type: integer
 *                 example: 20
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *       400:
 *         description: Erro na requisição
 */
router.post("/", productsController.create);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Obtém um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Produto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 price:
 *                   type: number
 *                 stockQuantity:
 *                   type: integer
 *                 isActive:
 *                   type: boolean
 *       404:
 *         description: Produto não encontrado
 */
router.get("/:id", productsController.show);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Atualiza um produto pelo ID
 *     tags: [Produtos]
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
 *                 example: Monitor Full HD
 *               description:
 *                 type: string
 *                 example: Monitor de 24 polegadas com resolução Full HD
 *               price:
 *                 type: number
 *                 example: 899.99
 *               stockQuantity:
 *                 type: integer
 *                 example: 15
 *               isActive:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *       404:
 *         description: Produto não encontrado
 */
router.put("/:id", productsController.update);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Deleta um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Produto deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Produto deletado com sucesso
 *       404:
 *         description: Produto não encontrado
 */
router.delete("/:id", productsController.delete);

module.exports = router;
