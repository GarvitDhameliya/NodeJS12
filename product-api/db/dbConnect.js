const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/productdb")
    .then(() => {
      console.log("db connect success");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connectDB };
