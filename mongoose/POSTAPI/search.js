const express = require("express");
const products = require("./products");
require("./config");
const Product = require("./products");

const app = express();

app.use(express.json());

app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  //   searching by name, category and brand
  let data = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});

app.listen(5000);
