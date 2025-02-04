const ProductsRepository = require("../repositories/products-repository");

class ProductsService {
    async getAllProducts() {
        return await ProductsRepository.findAll();
    }

    async getProductById(id) {
        return await ProductsRepository.findById(id);
    }

    async createProduct(data) {
        return await ProductsRepository.create(data);
    }

    async updateProduct(id, data) {
        return await ProductsRepository.update(id, data);
    }

    async deleteProduct(id) {
        return await ProductsRepository.delete(id);
    }
}

module.exports = new ProductsService();
