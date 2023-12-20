const mongoose = require("mongoose");
const dbConnect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/ecommmerce")
    .then(() => {
      console.log("db connect success");
    })
    .catch((err) => {
      console.log(err, "err");
    });
};

module.exports = { dbConnect };
