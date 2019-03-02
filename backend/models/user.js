const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  mail: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  admin: { type: Boolean, require: true },
  items: [{
    type: Schema.Types.ObjectId, ref: "item",
    default: () => { return []; },
    required: false
  }]
});

const usersList = module.exports = mongoose.model("user", userSchema);

module.exports.getAllUsers = (callback) => usersList.find().populate("items").exec(callback);

module.exports.getUserByUsernameAndPassword = (username, password, callback) => {
  let query = { username: username, password: password };
  return (usersList.findOne(query).populate("items").exec(callback));
}

module.exports.addUser = (newUser, callback) => newUser.save(callback);

//TODO: remove all users' items
module.exports.deleteUserByUsername = (username, callback) => {
  usersList.remove({ username }, callback);
}