const mongoose = require("mongoose");

const researchPaperSchema = new mongoose.Schema({
  professorId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  authors: {
    type: [String],
    required: true,
  },
  claimed: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    required: true,
  },
});

const ResearchPaper = mongoose.model("ResearchPaper", researchPaperSchema);

module.exports = ResearchPaper;
