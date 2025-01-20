const userModel = require("../models/user.model");

module.exports.indexController = (req, res) => {
  res.render("index");
};

module.exports.userController = async (req, res) => {
  const users = await userModel.find();
  res.render("users", { users });
  let { username, email, age, image } = req.body;
  createUser(username, email, age, image);
};

module.exports.profilecontroller = async (req, res) => {
  let id = req.params.id;

  res.send("hello world");
  console.log(id);
};

const createUser = async (username, email, age, image) => {
  const newUser = new userModel({ username, email, age, image });
  const result = await newUser.save();
  return result;
};
