const mongoose = require("mongoose");

async function connectDB() {
  try {
    console.log("MongoDB connected");
    mongoose.connect("mongodb://localhost:27017/dbusers", () => {
      useNewUrlParser: true;
    });
  } catch (error) {
    throw new Error(error);
  }
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const connectModel = mongoose.model("users", userSchema);

module.exports = {
  connectDB,
  connectModel,
};
