const mongoose = require("mongoose");

const DB = process.env.db_uri.replace("<password>", process.env.db_password);

const connectDb = () => {
  mongoose
    .connect(DB)
    .then((conn) => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb;
