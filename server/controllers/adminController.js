const Admin = require("../models/Admin");
const Professor = require("../models/Professor");
const ResearchPaper = require("../models/ResearchPaper");
const Patent = require("../models/Patent");
const { generateToken } = require("../utils/jwt");

// Admin login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the admin by email
    const admin = await Admin.findOne({ email });

    // Check if admin exists and verify password
    if (admin && (await admin.comparePassword(password))) {
      // Generate JWT token
      const token = generateToken(admin._id);
      res.json({ token });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error in admin login:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all professors
const getProfessors = async (req, res) => {
  try {
    const professors = await Professor.find();
    res.json({ professors });
  } catch (error) {
    console.error("Error in getting professors:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get professor by ID
const getProfessorById = async (req, res) => {
  try {
    const professorId = req.params.professorId;
    const professor = await Professor.findById(professorId);
    res.json({ professor });
  } catch (error) {
    console.error("Error in getting professor:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all research papers
const getResearchPapers = async (req, res) => {
  try {
    const researchPapers = await ResearchPaper.find();
    res.json({ researchPapers });
  } catch (error) {
    console.error("Error in getting research papers:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get all patents
const getPatents = async (req, res) => {
  try {
    const patents = await Patent.find();
    res.json({ patents });
  } catch (error) {
    console.error("Error in getting patents:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  login,
  getProfessors,
  getProfessorById,
  getResearchPapers,
  getPatents,
};
