const express = require("express");
const indexRouter = express.Router();
const {
  indexController,
  userController,
} = require("../controllers/index.controller");

indexRouter.get("/", indexController);

indexRouter.post("/users", userController);

module.exports = indexRouter;
