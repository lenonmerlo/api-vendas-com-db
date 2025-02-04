const Joi = require("joi");

const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).json({ message: "Erro de validação", details: error.details.map(d => d.message) });
    }
    next();
};

module.exports = validate;
