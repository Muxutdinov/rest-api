const { connectModel } = require("../db");

//GET ALL USERS
async function GetAllUsers(req, res) {
  try {
    const users = await connectModel.find({});
    res.status(200).send(users);
  } catch (error) {
    console.log(error + "");
  }
}

//GET ONE USER by id
async function GetOneUser(req, res) {
  try {
    const { id } = req.params;
    const users = await connectModel.find({});
    const isHaveUser = users.find((user) => user.id == id);
    if (!isHaveUser) {
      res.send("user topilmadida uka");
    }
    const user = await connectModel.findById(id);
    if (!user) {
      res.json({
        msg: "user topilmadi!",
      });
    } else {
      res.json({
        msg: "user topildi!",
        user,
      });
    }
  } catch (error) {
    console.log(error + "");
  }
}

//POST
async function Post(req, res) {
  try {
    const newUser = await connectModel.create(req.body);
    res.status(201).json({
      msg: "yangi data yaratildi!",
      newUser,
    });
  } catch (error) {
    console.log(error + "");
  }
}

//DELETE
async function Delete(req, res) {
  try {
    const { id } = req.params;
    const users = await connectModel.find({});
    const isHaveUser = await users.find((user) => user.id == id);
    if (!isHaveUser) {
      res.send("User topilmadi!");
    }
    const findUser = await connectModel.findById(id);
    await connectModel.findByIdAndDelete(id);
    res.status(200).json({
      msg: "user deleted",
      deleted: findUser,
    });
  } catch (error) {
    console.log(error + "");
  }
}

//UPDATE
async function Update(req, res) {
  try {
    const { id } = req.params;
    const users = await connectModel.find({});
    const isHaveUser = users.find((user) => user.id == id);
    if (!isHaveUser) {
      res.send("Update qilish uchun user topilmadi!");
    }
    const { name, email, password } = req.body;
    const UpdateUser = await connectModel.findByIdAndUpdate(id, {
      name,
      email,
      password,
    });
    res.status(200).json({ msg: "User Updated", UpdateUser });
  } catch (error) {
    console.log(error + "");
  }
}

module.exports = {
  GetAllUsers,
  GetOneUser,
  Post,
  Delete,
  Update,
};
