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

//Delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const findUser = await connectModel.findById(id);
  await connectModel.findByIdAndDelete(id);
  res.status(200).json({
    msg: "user deleted",
    deleted: findUser,
  });
});

//UPDATE
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const UpdateUser = await connectModel.findByIdAndUpdate(id, {
    name,
    email,
    password,
  });
  res.status(200).json({ msg: "User Updated", UpdateUser });
});

module.exports = { router: router };
