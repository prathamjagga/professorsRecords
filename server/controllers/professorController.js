const Professor = require("../models/Professor");
const ResearchPaper = require("../models/ResearchPaper");
const Unregistered = require("../models/Unregistered");
const { generateToken } = require("../utils/jwt");
const { client } = require("../utils/twilio");
const otpGenerator = require("otp-generator");

// Professor registration
const register = async (req, res) => {
  try {
    const { name, phone, otp, department } = req.body;

    // Check if professor already exists
    const professorExists = await Professor.findOne({ email });
    if (professorExists) {
      return res.status(400).json({ error: "Professor already exists" });
    }

    const Unreg = Unregistered.find({ phone });
    if (!Unreg) res.json({ error: "please send otp first" }).status(400);
    if (Unreg.otp != otp) res.json({ error: "wrong otp" }).status(400);

    const professor = new Professor({
      department,
      phone,
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
    const { phone, otp } = req.body;
    if (!Professor.find({ phone })) {
      return res.json({ error: "professor does not exist" }).status(400);
    }
    const Prof = Professor.find({ phone });
    const token = generateToken(String(Prof._id));
    res.status(200).json({ token });
  } catch (error) {
    res.json({ error }).status(500);
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

    res.json({ researchPapers }).status(200);
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

    res.json({ researchPapers }).status(200);
  } catch (error) {
    console.error("Error in getting research papers:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const getRPByDept = async (req, res) => {
  try {
    const { department } = req.body;
    return res.json(ResearchPaper.find({ department })).status(200);
  } catch (error) {
    return res.json({ error }).status(500);
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

const getOTPForRegister = async (req, res) => {
  try {
    const { phone } = req.body;
    if (Professor.find({ phone })) {
      return res.json({ error: "already registered" }).status(400);
    }
    if (Unregistered.find({ phone })) {
      const Unreg = Unregistered.find({ phone });
      const otp = otpGenerator.generate(6, {
        digits: true,
      });
      Unreg.otp = otp;

      await Unreg.save();
      await client.messages.create({
        body: `Your OTP from Panipat Institute of Engineering and Technology is: ${otp}`,
        from: "+15418723758",
        to: phone,
      });
    } else {
      const otp = otpGenerator.generate(6, {
        digits: true,
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
      });
      const Unreg = new Unregistered({
        phone,
        otp,
        otpExpiry: new Date(Date.now() + 5 * 60 * 1000),
      });

      await Unreg.save();
      await client.messages.create({
        body: `Your OTP from Panipat Institute of Engineering and Technology is: ${otp}`,
        from: "+15418723758",
        to: phone,
      });
    }
    return res.json({ response: "successfully sent the otp" }).status(200);
  } catch (error) {
    return res.json({ error: "server error" }).status(500);
  }
};

const getOtpForLogin = async (req, res) => {
  try {
    const { phone } = req.body;
    const otp = otpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    const Prof = Professor.find({ phone });
    Prof.otp = otp;
    Prof.otpExpiry = new Date(Date.now() + 5 * 60 * 1000);
    Prof.save();
    await client.messages.create({
      body: `Your OTP from Panipat Institute of Engineering and Technology is: ${otp}`,
      from: "+15418723758",
      to: phone,
    });
    return res
      .json({ success: "successfully sent the OTP for login" })
      .status(200);
  } catch (error) {
    res.json({ error }).status(500);
  }
};
module.exports = {
  register,
  login,
  getResearchPapers,
  uploadResearchPaper,
  allResearchPapers,
  claim,
  info,
};
