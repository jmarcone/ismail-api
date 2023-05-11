const pool = require("../db/pg");

const getCart = async () => {
    const { rows: cart } = await pool.query(
        "SELECT cart.*, products.* FROM cart JOIN products ON products.id = cart.product_id ORDER by cart.id"
    );

    return cart;
}

const addToCart = async (product_id, quantity = 1) => {
    if (!product_id)
        return res.json({ error: "missing data" });

    const rows = await pool.query(
        "SELECT * FROM cart WHERE product_id = $1",
        [product_id]
    );


    if (rows.rowCount !== 0) {
        await pool.query(
            "UPDATE cart SET quantity = quantity + $1 WHERE product_id = $2",
            [quantity, product_id]
        );
    } else {
        await pool.query(
            "INSERT INTO  cart (product_id, quantity) VALUES ($1, $2) RETURNING *",
            [product_id, quantity]
        );
    }

    return await getCart();
}

const removeFromCart = async (product_id) => {
    const rows = await pool.query("DELETE FROM cart WHERE product_id = $1", [product_id]);

    return await getCart();
}
module.exports = {
    getCart,
    addToCart,
    removeFromCart,
};

