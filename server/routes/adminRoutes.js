const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { requireAuth } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/adminMiddleware");

// Admin routes
router.post("/login", adminController.login);

router.get("/professors", requireAuth, isAdmin, adminController.getProfessors);
router.get(
  "/professors/:professorId",
  requireAuth,
  isAdmin,
  adminController.getProfessorById
);
router.get(
  "/research-papers",
  requireAuth,
  isAdmin,
  adminController.getResearchPapers
);
router.get("/patents", requireAuth, isAdmin, adminController.getPatents);

module.exports = router;
