const express = require("express");
const cors = require("cors");

const { connectDB } = require("./db/init"); // connect to database
const adRoute = require("./routes/Advertisement");

const app = express();

async function main() {
  await connectDB();
  app.use(cors());
  app.use(express.json());
  app.use("/api/ads", adRoute);
  app.listen(process.env.PORT || 5000, () => console.log("Welcome to backend"));
}

main();
