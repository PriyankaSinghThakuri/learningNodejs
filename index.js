// const http = require("http");
// const data = require("./data");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "applicationjson" });
//     res.write(JSON.stringify(data));
//     res.end();
//   })
//   .listen(8000);

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "files");
// console.log(dirPath);

// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(dirPath + "/hello" + i + ".txt", "a text from file");
// }

// // reading files
// fs.readdir(dirPath, (err, files) => {
//   files.forEach((item) => {
//     console.log("file name is:", item);
//   });
// });

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/data.txt`;

// creating the file
fs.writeFileSync(filePath, "This is data file");

// reading the file
fs.readFile(filePath, "utf8", (err, item) => {
  console.log(item);
});

// updating the file with new text
fs.appendFile(filePath, "This is text file after update", (err) => {
  if (!err) {
    console.log("File is updated");
  }
});

// renaming the file
fs.rename(filePath, `${dirPath}/datas.txt`, (err) => {
  if (!err) {
    console.log("File name is updated");
  }
});

// delete the file
fs.unlinkSync(`${dirPath}/datas.txt`);
