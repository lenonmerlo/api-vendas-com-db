const express = require("express");
const customersRoutes = require("./routes/customers");
const productsRoutes = require("./routes/products");
const ordersRoutes = require("./routes/orders");
const authRoutes = require("./routes/auth");

const router = express.Router();

router.use("/customers", customersRoutes);
router.use("/products", productsRoutes);
router.use("/orders", ordersRoutes);
router.use("/auth", authRoutes);

module.exports = router;
