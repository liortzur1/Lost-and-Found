const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  mail: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  admin: { type: Boolean, require: true }
});

const usersList = module.exports = mongoose.model("user", userSchema);

module.exports.getAllUsers = (callback) => usersList.find(callback);

module.exports.getUserByUsernameAndPassword = (username, password, callback) => {
  let query = {username: username, password: password};
  return (usersList.findOne(query, callback));
}

module.exports.addUser = (newUser, callback) => newUser.save(callback);

module.exports.deleteUserById = (id, callback) => {
  let query = {_id: id};
  usersList.remove(query, callback);
}