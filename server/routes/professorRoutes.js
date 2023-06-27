const express = require("express");
const router = express.Router();
const multer = require("multer"); // For handling file uploads
const professorController = require("../controllers/professorController");
const { uploadPath } = require("../config/config");
const { requireAuth, localVariables } = require("../middlewares/authMiddleware");

// Multer configuration for handling file uploads
const upload = multer({ dest: uploadPath });

// Professor registration route
router.post("/register", professorController.register);

// Professor login route
router.post("/login", professorController.login);

// Get research papers for a professor
router.get(
  "/research-papers",
  requireAuth,
  professorController.getResearchPapers
);

// Upload a research paper
router.post(
  "/upload-research-paper",
  requireAuth,
  professorController.uploadResearchPaper
);

router.get("/all-research-papers", professorController.allResearchPapers);

router.post("/claim", professorController.claim);

router.get("/info", requireAuth, professorController.info);

router.get("/sendOTP", professorController.verifyUser, localVariables, professorController.sendOTP)

router.get("/verifyOTP", professorController.veriyfyOTP)

router.put("/resetPassword",requireAuth, professorController.resetPassword);
module.exports = router;
