const Joi = require("joi");

const orderSchema = Joi.object({
    customerId: Joi.number().integer().positive().required(),
    products: Joi.array().items(
        Joi.object({
            id: Joi.number().integer().positive().required(),
            quantity: Joi.number().integer().positive().required()
        })
    ).min(1).required()
});

module.exports = { orderSchema };
