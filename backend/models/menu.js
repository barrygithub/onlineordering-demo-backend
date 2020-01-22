const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  menus: [{ menuName: String }],
  category: String,
  name: String,
  description: String,
  imagePath: String,
  price: Number,
  options: {
    id: Number,
    title: String,
    description: String,
    choices: [{ name: String, price: Number }],
    required: Number
  },
  instructions: { id: Number, title: String, description: String, text: String }
});

module.exports = mongoose.model("Menu", menuSchema);
