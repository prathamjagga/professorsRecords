const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Method to compare passwords
adminSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

// Pre-save hook to hash the password before saving
adminSchema.pre("save", function (next) {
  const admin = this;

  // Hash the password only if it has been modified or is new
  if (!admin.isModified("password")) {
    return next();
  }

  // Generate a salt to hash the password
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }

    // Hash the password with the generated salt
    bcrypt.hash(admin.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }

      // Set the hashed password
      admin.password = hash;
      next();
    });
  });
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
