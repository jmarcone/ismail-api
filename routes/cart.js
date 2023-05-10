const express = require("express");
const cartController = require("../controllers/cart");

const router = express.Router();

router.get("/all", cartController.getCart);

router.post("/addProduct", cartController.addToCart);

router.get("/removeProduct/:id", cartController.removeFromCart);

module.exports = router;