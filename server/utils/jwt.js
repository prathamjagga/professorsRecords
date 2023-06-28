const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

// Generate a JWT token
const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET);
};

console.log(generateToken("6492ef906e931bde3c9edf0d"));

// Verify and decode a JWT token
const verifyToken = (token) => {
  console.log(jwt.verify(token, JWT_SECRET));

  return jwt.verify(token, JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};
