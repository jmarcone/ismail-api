const express = require("express");
const productsController = require("../controllers/cart");

const router = express.Router();

router.get("/all", productsController.getCart);

router.get("/addProduct", productsController.addToCart);

router.get("/removeProduct", productsController.removeFromCart);

module.exports = router;