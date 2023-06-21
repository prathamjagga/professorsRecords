const { PORT, MONGODB_URI } = require("./config/config");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

// Import routes
const professorRoutes = require("./routes/professorRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Routes
app.use("/api/professors", professorRoutes);
app.use("/api/admin", adminRoutes);

// 404 route not found middleware
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error("Global error handler:", err);
  res.status(500).json({ error: "Server error" });
});
