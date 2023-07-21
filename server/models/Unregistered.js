const mongoose = require("mongoose");

const UnregisteredSchema = new mongoose.Schema({
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },
  phone: {
    type: String,
    unique: true,
  },
});

const Unregistered = mongoose.model("ResearchPaper", UnregisteredSchema);

module.exports = Unregistered;
