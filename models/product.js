const pool = require("../db/pg");

const getAll = async () => {
    const { rows: products } = await pool.query(`select * FROM products`);

    return products;
}

const getById = async (id) => {
    const { rows: [product] } = await pool.query("select * FROM products WHERE id = $1", [id]);

    return product;
}



module.exports = {
    getAll,
    getById
    
  };
