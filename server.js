const app = require("./src/app");

// Connect to MongoDB

const connectDB = require("./src/db/db");
connectDB();

app.listen(3000, () => {
  console.log("listening on port 3000");
});
