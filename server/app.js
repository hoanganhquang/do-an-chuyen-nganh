const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const AuthRoute = require("./routes/Auth.route");
const ProductRoute = require("./routes/Product.route");
const CardRoute = require("./routes/Card.route");
const OrderRoute = require("./routes/Order.route");
const AdminRoute = require("./routes/Admin.route");
const UserRoute = require("./routes/User.route");
const ProvinceRoute = require("./routes/Province.route");
const RegionRoute = require("./routes/Region.route");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/auth", AuthRoute);
app.use("/api/v1/product", ProductRoute);
app.use("/api/v1/province", ProvinceRoute);
app.use("/api/v1/Region", RegionRoute);
app.use("/api/v1/card", CardRoute);
app.use("/api/v1/order", OrderRoute);
app.use("/api/v1/statistics", AdminRoute);
app.use("/api/v1/user", UserRoute);

module.exports = app;
