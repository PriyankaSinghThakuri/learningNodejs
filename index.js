const express = require("express");
const reqFilter = require("./middleware");

const app = express();
const route = express.Router();

// app.use(reqFilter);

route.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Welcome to Home page");
});

route.get("/users", (req, res) => {
  res.send("Welcome to users page");
});
route.get("/contact", (req, res) => {
  res.send("Welcome to contact page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About page");
});

app.use("/", route);

app.listen(5000);
