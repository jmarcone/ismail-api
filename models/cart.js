const pool = require("../db/pg");

const getCart = async() => {
    const { rows: cartItems } = await pool.query(
        "SELECT * FROM cart",
        [product_id, quantity]
    );

    return cartItem;
}

const addToCart = async (product_id, quantity = 1) => {
    if (!product_id)
        return res.json({ error: "missing data" });


    const { rows: cartItem } = await pool.query(
        "INSERT INTO  cart (product_id, quantity) VALUES ($1, $2) RETURNING *",
        [product_id, quantity]
    );

    return cartItem;
}

const removeFromCart = async (product_id) => {
       const  rows  = await pool.query("DELETE FROM cart WHERE product_id = $1", [product_id]);

    return true;
}
module.exports = {
    getCart,
    addToCart,
    removeFromCart,
  };

