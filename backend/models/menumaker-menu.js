const mongoose = require("mongoose");

const MenuMakerMenuSchema = mongoose.Schema({
  menuName: String
});

module.exports = mongoose.model("MenuMaker-Menu", MenuMakerMenuSchema);
