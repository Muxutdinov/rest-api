const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const { connectDB, connectModel } = require("./db.js");

connectDB();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.listen(PORT, console.log(`Server run on port ${PORT}`));
