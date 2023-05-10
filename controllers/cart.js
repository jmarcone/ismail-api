const cartModel = require("../models/cart");

const getCart = async (req, res) => {
    try {
        const rows = await cartModel.getAll();
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500);
    }
};

const addToCart = async (req, res) => {
    try {
        const { product_id, quantity } = req.params;
        const cart = await cartModel.addToCart(product_id, quantity);
        
        res.json(cart);
    } catch (err) {
        console.error(err);
        res.status(500);
    }
};

const removeFromCart = async (req, res) => {
    try {
        const { product_id } = req.params;
        const cart = await cartModel.removeFromCart(product_id);
        
        res.json(cart);
    } catch (err) {
        console.error(err);
        res.status(500);
    }
};



module.exports = {
    getCart,
    addToCart,
    removeFromCart
};