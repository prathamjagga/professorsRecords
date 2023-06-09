const mongoose = require("mongoose");
const { MONGOURI } = require("../config"); // on local environment you can import the vars from config.js

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGOURI); // for purpose of deployment I am using env var
    console.log("Connected to DB Successfully.");
  } catch (err) {
    console.log("Error Occured while connecting to DB\n", err);
  }
}

module.exports = { connectDB };
