const express = require("express");
const productsController = require("../controllers/products");

const router = express.Router();

// Get all products
router.get("/all", productsController.getAll);

// Get a specific product by id
router.get("/:id", productsController.getById);

module.exports = router;