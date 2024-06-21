const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const questions = {
  Technology: [
    {
      label: "What is the last new technology you learned about?",
      type: "text",
    },
    {
      label: "Do you think technology is making people's lives better?",
      type: "boolean",
    },
    {
      label: "Which tech stack are you most comfortable working with?",
      type: "text",
    },
    {
      label:
        "Have you ever worked on a large-scale software project? If yes, please describe",
      type: "textarea",
    },
    {
      label: "How do you stay updated with the latest technology trends?",
      type: "text",
    },
  ],
  Health: [
    {
      label: "How often do you exercise in a week?",
      type: "dropdown",
      options: ["Daily", "Weekly", "Monthly", "Rarely"],
    },
    { label: "What is your preferred type of exercise?", type: "text" },
    {
      label: "How would you rate your current diet in terms of healthiness?",
      type: "text",
    },
    {
      label: "Do you have any specific health goals you are working towards?",
      type: "textarea",
    },
    {
      label:
        "Have you ever participated in a fitness program or wellness challenge?",
      type: "text",
    },
  ],
  Education: [
    {
      label: "What is your highest level of education completed?",
      type: "dropdown",
      options: ["High School", "Bachelor's", "Master's", "PhD"],
    },
    { label: "What was your field of study or major?", type: "text" },
    {
      label:
        "Did you pursue any additional certifications or courses related to your field?",
      type: "text",
    },
    {
      label: "How do you think your education has influenced your career?",
      type: "text",
    },
    {
      label:
        "Are you currently enrolled in any educational programs or planning to pursue further studies?",
      type: "text",
    },
  ],
};

app.get("/questions/:topic", (req, res) => {
  const { topic } = req.params;
  console.log(topic);
  if (questions[topic]) {
    res.json(questions[topic]);
  } else {
    res.status(404).json({ error: "Topic not found" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
