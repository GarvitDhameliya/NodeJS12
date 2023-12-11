const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  age: {
    type: Number,
  },
});

const user = mongoose.model("userSchema", userSchema);

module.exports = user;
