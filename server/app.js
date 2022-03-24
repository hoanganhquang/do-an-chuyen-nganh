const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const AuthRoute = require("./routes/Auth.route");
const CategoryRoute = require("./routes/Category.route");
const ProductRoute = require("./routes/Product.route");
const CardRoute = require("./routes/Card.route");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/auth", AuthRoute);
app.use("/api/v1/category", CategoryRoute);
app.use("/api/v1/product", ProductRoute);
app.use("/api/v1/Card", CardRoute);

module.exports = app;
