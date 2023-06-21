const jwt = require("jsonwebtoken");
const Professor = require("../models/Professor");
const { JWT_SECRET } = require("../config/config");
const mongoose = require("mongoose");

// Middleware to check if the user is authenticated
const requireAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded);
    const professor = await Professor.findById(decoded);
    if (!professor) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    req.user = professor._id;
    next();
  } catch (error) {
    console.error("Error in authentication middleware:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  requireAuth,
};
