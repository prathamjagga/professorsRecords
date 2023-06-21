const Professor = require("../models/Professor");
const ResearchPaper = require("../models/ResearchPaper");
const { generateToken } = require("../utils/jwt");

// Professor registration
const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Check if professor already exists
    const professorExists = await Professor.findOne({ email });
    if (professorExists) {
      return res.status(400).json({ error: "Professor already exists" });
    }

    // Create new professor
    const professor = new Professor({
      email,
      password,
      name,
      coins: 0,
    });

    // Save the professor to the database
    await professor.save();

    // Generate JWT token
    const token = generateToken(String(professor._id));

    res.status(201).json({ token });
  } catch (error) {
    console.error("Error in professor registration:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Professor login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the professor by email
    const professor = await Professor.findOne({ email });

    // Check if professor exists and verify password
    if (professor && (await professor.comparePassword(password))) {
      // Generate JWT token
      const token = generateToken(String(professor._id));
      console.log(JSON.stringify(professor._id));

      res.json({ token });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error in professor login:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get research papers for a professor
const getResearchPapers = async (req, res) => {
  try {
    // Get the professor ID from the authenticated token
    console.log(req.user);
    const professorId = req.user;
    console.log("in rp, " + typeof professorId);

    // Find the research papers for the professor
    const researchPapers = await ResearchPaper.find({ professorId });

    res.json({ researchPapers });
  } catch (error) {
    console.error("Error in getting research papers:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const allResearchPapers = async (req, res) => {
  try {
    // Get the professor ID from the authenticated token

    // Find the research papers for the professor
    const researchPapers = await ResearchPaper.find();

    res.json({ researchPapers });
  } catch (error) {
    console.error("Error in getting research papers:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Upload a research paper
const uploadResearchPaper = async (req, res) => {
  try {
    // Get the professor ID from the authenticated token
    const professorId = req.user;

    const { name, url, authors, type } = req.body;

    // Create a new research paper
    const researchPaper = new ResearchPaper({
      professorId,
      name,
      url,
      authors,
      claimed: false,
      type,
    });

    // Save the research paper to the database
    await researchPaper.save();

    // Increment professor's coins
    const professor = await Professor.findById(professorId);
    professor.coins += 1;
    await professor.save();

    res.status(201).json({ message: "Research paper uploaded successfully" });
  } catch (error) {
    console.error("Error in uploading research paper:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const claim = async (req, res) => {
  try {
    const { paperId } = req.body;
    console.log("paperId", paperId);
    console.log("paperId type" + typeof paperId);
    const paper = await ResearchPaper.findById(paperId);

    paper.claimed = true;

    await paper.save();
    // Check if professor exists and verify password
    res.json(paper).status(200);
  } catch (error) {
    console.error("Error in professor claim:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const info = async (req, res) => {
  console.log("user" + req.user);
  console.log("req.user type" + typeof req.user);
  console.log("professor as string ", String(req.user));

  try {
    const professor = await Professor.findById(String(req.user));
    if (!professor) return res.json({ error: "unauthorized" }).status(401);
    else {
      const { name, email, coins } = professor;
      res.json({ name, email, coins }).status(200);
    }
  } catch (error) {
    console.log(error);
    console.log("error in info");
    return res.status(500).json({ error: "server error" });
  }
};

const sendOTP = async (req, res) => {};

module.exports = {
  register,
  login,
  getResearchPapers,
  uploadResearchPaper,
  allResearchPapers,
  claim,
  info,
};
