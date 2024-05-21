const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, required: true },
  img: { type: String, required: true },
});

module.exports = mongoose.model("Novelty", schema);