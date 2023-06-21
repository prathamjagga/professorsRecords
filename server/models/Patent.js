const mongoose = require("mongoose");

const patentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  authors: {
    type: [String],
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  claimed: {
    type: Boolean,
    default: false,
  },
});

const Patent = mongoose.model("Patent", patentSchema);

module.exports = Patent;
