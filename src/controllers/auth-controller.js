const AuthService = require("../services/auth-service");

const authController = {
    async register(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await AuthService.register(name, email, password);
            res.status(201).json({ message: "Usuário registrado com sucesso", user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const token = await AuthService.login(email, password);
            res.json({ token });
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }
};

module.exports = authController;
