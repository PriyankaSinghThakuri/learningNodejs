const dbConnection = require("./mongodb");

const deletedata = async () => {
  let data = await dbConnection();
  //   for single data deletion
  //   let result = await data.deleteOne({ name: "iphone14" });

  //   for multiple data deletion
  let result = await data.deleteMany({ name: "samsungmax" });

  console.log(result);

  if (result.acknowledged) {
    console.warn("data deleted");
  }
};

deletedata();
