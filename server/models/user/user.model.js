const mongoose = require("mongoose");
const UserSchema = require("./user.schema");
const UserModel = mongoose.model("UserModel", UserSchema);

// Create new user int MongoDB
UserModel.createUser = user => {
  return UserModel.create(user);
};

// Find all user
UserModel.findAllUsers = () => {
  return UserModel.find();
};

// Find user by id
UserModel.findUserById = uid => {
  return UserModel.findById(uid);
};

module.exports = UserModel;
