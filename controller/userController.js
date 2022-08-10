const { connectModel } = require("../db");

async function getAllUsers(req, res) {
  try {
    const users = await connectModel.find({});
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
}



module.exports = {
  getAllUsers,
};
