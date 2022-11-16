const dbConnection = require("./mongodb");

// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const database = "e-commerce";
// const client = new MongoClient(url);

// async function dbConnection() {
//   let result = await client.connect();
//   let db = result.db(database);
//   return db.collection("products");
//   //   let collection = db.collection("products");
//   //   let response = await collection.find({ name: "iphone14" }).toArray();
//   //   let response = await collection.find({}).toArray();
//   //   console.log(response);
// }

// Old async await way
// dbConnection().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((data) => {
//       console.warn(data);
//     });
// });

// Modern async await way
const main = async () => {
  let data = await dbConnection();
  data = await data.find().toArray();
  console.warn(data);
};

main();
