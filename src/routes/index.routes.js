const express = require("express");
const indexRouter = express.Router();
const {
  indexController,
  userController,
  profilecontroller,
} = require("../controllers/index.controller");
const userModel = require("../models/user.model");

indexRouter.get("/", indexController);

indexRouter.get("/users", async (req, res) => {
  const users = await userModel.find();
  res.render("users", { users });
});

indexRouter.post("/users", userController);

indexRouter.get("/users/profile/:id", profilecontroller);

module.exports = indexRouter;
