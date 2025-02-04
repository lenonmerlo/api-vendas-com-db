const OrdersRepository = require("../repositories/orders-repository");

class OrdersService {
    async getAllOrders() {
        return await OrdersRepository.findAll();
    }

    async getOrderById(id) {
        return await OrdersRepository.findById(id);
    }

    async createOrder(customerId, products) {
        return await OrdersRepository.create(customerId, products);
    }

    async deleteOrder(id) {
        return await OrdersRepository.delete(id);
    }
}

module.exports = new OrdersService();
