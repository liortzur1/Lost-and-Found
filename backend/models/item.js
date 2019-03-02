const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itemSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  kind: { type: String, enum: ["Lost", "Found"], required: true },
  category: { type: Schema.Types.ObjectId, ref: "category", required: true },
  color: { type: String, required: true },
  createTime: { type: Date, required: true },
  location: { type: String, require: true }
});

const itemsList = module.exports = mongoose.model("item", itemSchema);

module.exports.getAllItems = (callback) => itemsList.find().populate("category").exec(callback);