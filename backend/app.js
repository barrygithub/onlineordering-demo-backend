/** Hold the Express App */

// import express
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


//Order Model
const Order = require("./models/order");
const Menu = require("./models/menu");
const MenuMakerMenu = require("./models/menumaker-menu.js");
const MenuMakerCategory = require("./models/menumaker-category.js");

//create express app
const app = express();

mongoose
  .connect(
    "mongodb+srv://dbuser:ClwuQR9cvsWO9Iak@onlineorderingcluster0-leps5.mongodb.net/onlineordering?retryWrites=true"
  )
  .then(() => {
    console.log("Connect to database!");
  })

  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

/** CORS **/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/menumaker/menus", (req, res, next) => {
  const menu = new MenuMakerMenu(req.body);
  menu.save();
  console.log(menu);
  res.status(201).json({
    //201 everything ok, new resource was created
    message: "Post added successfully"
  });
});

app.get("/api/menumaker/menus", (req, res, next) => {
  MenuMakerMenu.find().then(documents => {
    res.status(200).json({
      message: "Menus fetched successfully",
      data: documents
    });

    console.log(documents);
  });
});

app.post("/api/menumaker/categories", (req, res, next) => {
  const category = new MenuMakerCategory(req.body);
  category.save();
  console.log(category);
  res.status(201).json({
    //201 everything ok, new resource was created
    message: "Post added successfully"
  });
});

app.get("/api/menumaker/categories", (req, res, next) => {
  MenuMakerCategory.find().then(documents => {
    res.status(200).json({
      message: "Categories fetched successfully",
      data: documents
    });

    console.log(documents);
  });
});

app.post("/api/menus", (req, res, next) => {
  //const menu = req.body;
  const menu = new Menu(req.body);
  menu.save();
  console.log(menu);
  res.status(201).json({
    //201 everything ok, new resource was created
    message: "Post added successfully"
  });
});

app.post("/api/orders", (req, res, next) => {
  const order = new Order(req.body);
  //console.log(order.menuData[0].name);
  console.log(req.body.orderData[0].options);
  //console.log(typeof req.body.options);
  console.log(order);
  order.save();
  res.status(201).json({
    //201 everything ok, new resource was created
    message: "Post added successfully"
  });
});

app.get("/api/orders", (req, res, next) => {
    Order.find().then(documents => {
    res.status(200).json({
    message: "Order fetched successfully",
    data: documents
});

console.log(documents);
});
});


//middleware
app.get("/api/posts", (req, res, next) => {
  Menu.find().then(documents => {
    res.status(200).json({
      message: "Menus fetched successfully",
      data: documents
    });

    console.log(documents);
  });
});

//export
module.exports = app;
