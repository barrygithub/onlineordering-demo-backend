const mongoose = require("mongoose");

const MenuMakerMenuSchema = mongoose.Schema({
  categoryName: String,
  Menus: [{ menuName: String }]
});

module.exports = mongoose.model("MenuMaker-Category", MenuMakerMenuSchema);
