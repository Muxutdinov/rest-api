const express = require("express");
const router = express.Router();
const { connectModel } = require("../db");

//GET
router.get("/get", async (req, res) => {
  const users = await connectModel.find({});
  res.status(200).send(users);
});

//POST
router.post("/post", async (req, res) => {
  const newUser = await connectModel.create(req.body);
  res.status(201).json({
    msg: "yangi data yaratildi!",
    newUser,
  });
});

module.exports = { router: router };
