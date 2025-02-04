const CustomersService = require("../services/customers-service");

const customersController = {
    async index(req, res) {
        try {
            const customers = await CustomersService.getAllCustomers();
            res.json(customers);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar clientes", error: error.message });
        }
    },

    async show(req, res) {
        try {
            const customer = await CustomersService.getCustomerById(req.params.id);
            if (!customer) return res.status(404).json({ message: "Cliente não encontrado" });
            res.json(customer);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar cliente", error: error.message });
        }
    },

    async create(req, res) {
        try {
            const newCustomer = await CustomersService.createCustomer(req.body);
            res.status(201).json(newCustomer);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    async update(req, res) {
        try {
            const updatedCustomer = await CustomersService.updateCustomer(req.params.id, req.body);
            if (!updatedCustomer) return res.status(404).json({ message: "Cliente não encontrado" });
            res.json(updatedCustomer);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    async delete(req, res) {
        try {
            const deletedCustomer = await CustomersService.deleteCustomer(req.params.id);
            if (!deletedCustomer) return res.status(404).json({ message: "Cliente não encontrado" });
            res.json({ message: "Cliente deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar cliente", error: error.message });
        }
    }
};

module.exports = customersController;
