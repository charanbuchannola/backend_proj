const userModel = require("../models/user.model");

module.exports.indexController = (req, res) => {
  res.render("index");
};

module.exports.userController = (req, res) => {
  res.send("Welcome");
  let {username, email, age, image} = req.body;
  createUser(username, email, age, image);
};

const createUser = async (username, email, age, image) => {
  const newUser = new userModel({ username, email, age, image });
  const result = await newUser.save();
  return result;
};
