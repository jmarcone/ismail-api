const productModel = require("../models/product");

const getAll = async (req, res) => {
    try {
        const rows = await productModel.getAll();
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500);
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const space = await productModel.getSpace(id);
        if (!space) {
            res.status(404).json({ error: "product not found" });
            return;
        }
        res.json(space);
    } catch (err) {
        console.error(err);
        res.status(500);
    }
};


module.exports = {
    getAll,
    getById
};