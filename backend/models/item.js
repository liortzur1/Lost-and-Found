const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  //id: { type: Objectid, required: false },
  name: { type: String, required: true },
  description: { type: String, required: true },
  kind: { type: Number, required: true },
  category: { type: Number, required: true },
  color: { type: String, required: true },
  create_time: { type: Date, required: true },
  location: { type: String, require: true },
  username: { type: String, require: true }
});

const itemsList = module.exports = mongoose.model("item", itemSchema);

module.exports.getAllItems = (callback) => itemsList.find(callback);
/*
module.exports.getUserByUsernameAndPassword = (username, password, callback) => {
  let query = {username: username, password: password};
  return (usersList.findOne(query, callback));
}*/

module.exports.addItem = (newItem, callback) => newItem.save(callback);
/*
module.exports.deleteUserById = (id, callback) => {
  let query = {_id: id};
  usersList.remove(query, callback);
}*/