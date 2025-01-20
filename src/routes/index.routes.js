const express = require("express");
const indexRouter = express.Router();
const {
  indexController,
  userController,
  profilecontroller,
} = require("../controllers/index.controller");

indexRouter.get("/", indexController);

indexRouter.post("/users", userController);

indexRouter.get("/users/profile/:id", profilecontroller);

module.exports = indexRouter;
