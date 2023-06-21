const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

// Middleware to check if the user is an admin
const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id);

    if (!admin || !admin.isAdmin) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    req.user = admin;
    next();
  } catch (error) {
    console.error("Error in admin middleware:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  isAdmin,
};
