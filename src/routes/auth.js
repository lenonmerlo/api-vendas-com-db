const express = require("express");
const authController = require("../controllers/auth-controller");
const validate = require("../middlewares/validate");
const { registerSchema, loginSchema } = require("../validators/authValidator");

const router = express.Router();

router.post("/register", validate(registerSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);

module.exports = router;
