const ProductsService = require("../services/products-service");

const productsController = {
    async index(req, res) {
        try {
            const products = await ProductsService.getAllProducts();
            res.json(products);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar produtos", error: error.message });
        }
    },

    async show(req, res) {
        try {
            const product = await ProductsService.getProductById(req.params.id);
            if (!product) return res.status(404).json({ message: "Produto não encontrado" });
            res.json(product);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar produto", error: error.message });
        }
    },

    async create(req, res) {
        try {
            const newProduct = await ProductsService.createProduct(req.body);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    async update(req, res) {
        try {
            const updatedProduct = await ProductsService.updateProduct(req.params.id, req.body);
            if (!updatedProduct) return res.status(404).json({ message: "Produto não encontrado" });
            res.json(updatedProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    async delete(req, res) {
        try {
            const result = await ProductsService.deleteProduct(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar produto", error: error.message });
        }
    }
};

module.exports = productsController;
