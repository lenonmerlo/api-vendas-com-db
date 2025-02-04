const { verifyToken } = require("../utils/jwt");

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Acesso negado. Token não fornecido." });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
        return res.status(403).json({ message: "Token inválido ou expirado." });
    }

    req.user = decoded;
    next();
};
