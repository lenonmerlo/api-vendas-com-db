const AuthRepository = require("../repositories/auth-repository");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwt");

class AuthService {
    async register(name, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return await AuthRepository.createUser(name, email, hashedPassword);
    }

    async login(email, password) {
        const user = await AuthRepository.findByEmail(email);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error("E-mail ou senha inválidos.");
        }
        return generateToken(user);
    }
}

module.exports = new AuthService();
