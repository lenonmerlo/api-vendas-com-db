const OrdersService = require("../services/orders-service");

const ordersController = {
    async index(req, res) {
        try {
            const orders = await OrdersService.getAllOrders();
            res.json(orders);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar pedidos", error: error.message });
        }
    },

    async create(req, res) {
        try {
            const { customerId, products } = req.body;
            const newOrder = await OrdersService.createOrder(customerId, products);
            res.status(201).json(newOrder);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    async show(req, res) {
        try {
            const order = await OrdersService.getOrderById(Number(req.params.id));
            if (!order) return res.status(404).json({ message: "Pedido não encontrado" });
            res.json(order);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar pedido", error: error.message });
        }
    },

    async delete(req, res) {
        try {
            const result = await OrdersService.deleteOrder(Number(req.params.id));
            if (!result.success) return res.status(404).json({ message: result.message });
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar pedido", error: error.message });
        }
    }
};

module.exports = ordersController;
