const express = require("express");
const router = express.Router();
const {
  GetAllUsers,
  GetOneUser,
  Post,
  Delete,
  Update,
} = require("../controller/userController");

//GET ALL USERS
router.get("/get", GetAllUsers);

// GET ONE USER
router.get("/get/:id", GetOneUser);

//POST
router.post("/post", Post);

//DELETE
router.delete("/delete/:id", Delete);

//UPDATE
router.put("/:id", Update);

module.exports = { router: router };
