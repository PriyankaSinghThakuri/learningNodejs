const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-commerce");

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

const saveInDB = async () => {
  const productModel = new mongoose.model("products", productSchema);
  let data = new productModel({
    name: "poco",
    brand: "POCO",
    price: 7500,
    category: "Mobile",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const productModel = mongoose.model("products", productSchema);
  let data = await productModel.updateOne(
    { name: "samsung M14" },
    {
      $set: { price: 9000, name: "pukiii" },
    }
  );
  console.log(data);
};

const deleteInDB = async () => {
  const productModel = mongoose.model("products", productSchema);
  let data = await productModel.deleteMany({
    name: "microoo",
  });
  console.log(data);
};

const findInDB = async () => {
  const productModel = mongoose.model("products", productSchema);
  // let data = await productModel.find({ name: "microoo" }); for single search
  // for all data
  let data = await productModel.find();
  console.log(data);
};

findInDB();
