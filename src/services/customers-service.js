const CustomersRepository = require("../repositories/customers-repository");

class CustomersService {
    async getAllCustomers() {
        return await CustomersRepository.findAll();
    }

    async getCustomerById(id) {
        return await CustomersRepository.findById(id);
    }

    async createCustomer(data) {
        return await CustomersRepository.create(data);
    }

    async updateCustomer(id, data) {
        return await CustomersRepository.update(id, data);
    }

    async deleteCustomer(id) {
        return await CustomersRepository.delete(id);
    }
}

module.exports = new CustomersService();
