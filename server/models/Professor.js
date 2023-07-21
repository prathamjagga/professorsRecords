const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const professorSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  coins: {
    type: Number,
    default: 0,
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },
  department: {
    type: String,
    required: true,
  },
});

// Hash the password before saving to the database
professorSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords for authentication
professorSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error("Password comparison failed");
  }
};

const Professor = mongoose.model("Professor", professorSchema);

module.exports = Professor;
