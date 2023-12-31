const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});

const user = mongoose.model("userSchema", userSchema);

module.exports = user;
