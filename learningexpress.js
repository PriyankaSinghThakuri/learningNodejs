const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("/home", (req, res) => {
  res.send("Hello, this is Home Page");
});

app.get("", (_, res) => {
  const user = {
    name: "Priyanka Singh Thakuri",
    email: "priyanka@test123",
    city: "kathmandu",
    skills: ["php", "js", "c++"],
  };
  res.render("profile", { user });
});

app.get("/login", (_, res) => {
  res.render("login");
});

app.get("/about", (req, res) => {
  res.send("Hello, this is About Page");
});

app.get("/help", (req, res) => {
  res.send("Welcome, this is Help Page");
});

app.listen(4200);
