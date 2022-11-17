const dbConnection = require("./mongodb");

const updataData = async () => {
  let data = await dbConnection();

  //   for single data updation
  //   let result = await data.updateOne(
  //     { name: "samsung M14" },
  //     {
  //       $set: { name: "samsung promax" },
  //     }
  //   );

  //   for multiple data updation ----for multiple dat updation of same name use update insted of updateOne
  let result = await data.updateOne(
    { name: "iphone6" },
    {
      $set: { name: "samsungmax", price: 5500 },
    }
  );
  console.log(result);
};

updataData();
