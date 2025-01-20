const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017/project1") // 0.0.0.0 for localhost,
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));
};
module.exports = connect;
