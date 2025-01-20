const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  image: { type: String, required: true },
});
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
