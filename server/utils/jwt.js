const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

// Generate a JWT token
const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET);
};

// Verify and decode a JWT token
const verifyToken = (token) => {
  console.log(jwt.verify(token, JWT_SECRET));

  return jwt.verify(token, JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};
