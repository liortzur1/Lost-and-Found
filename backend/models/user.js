const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  mail: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  admin: { type: Boolean, require: true }
});

const usersList = module.exports = mongoose.model("user", userSchema);

module.exports.getAllUsers = (callback) => usersList.find(callback);

module.exports.getUserByMailAndPassword = (mail, password, callback) => {
  let query = {mail: mail, password: password};
  return (usersList.findOne(query, '-_id', callback));
}

module.exports.editUser = (editedUser, callback) => usersList.findOneAndUpdate({ mail: editedUser.mail }, editedUser, {upsert: true, new: true, runValidators: true}, callback);

module.exports.addUser = (newUser, callback) => newUser.save(callback);

module.exports.deleteUserByMail = (mail, callback) => {
  let query = {mail: mail};
  usersList.remove(query, callback);
}