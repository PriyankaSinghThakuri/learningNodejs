const dbConnection = require("./mongodb");

const insertData = async () => {
  const db = await dbConnection();
  const result = await db.insert([
    {
      name: "iphone6",
      brand: "apple",
      price: 2500,
      category: "mobile",
    },
    {
        name: "samsung M14",
        brand: "samsung",
        price: 8500,
        category: "mobile",
      },
      {
        name: "vivoKL45",
        brand: "vico",
        price: 1500,
        category: "mobile",
      },
  ]);

  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insertData();
