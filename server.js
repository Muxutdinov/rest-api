const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const usersRoute = require("./Routes/usersRoute");
const { connectDB } = require("./db");

//MONGODB
connectDB();

//MIDDLEWERE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//USE ROUTER
app.use(usersRoute.router);

//LISTEN
app.listen(PORT, console.log(`Server run on port ${PORT}`));
