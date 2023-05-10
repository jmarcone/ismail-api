const express = require("express");
const cors = require("cors");
const cartRouter = require("./routes/cart");
const productsRouter = require("./routes/products");

const app = express();
app.use(cors());
app.use(express.json());


const port = process.env.PORT || 8000;


app.use("/api/cart", cartRouter);
app.use("/api/products", productsRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));