// We used express to create our server's endpoints and listen for & respond to requests from the frontend

import "dotenv/config";
import * as db from "./db/index.js";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Start the HTTP server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Utility function to handle profession endpoints
const professionEndpoint = (route, profession) => {
  app.get(route, async (req, res) => {
    try {
      const dbResponse = await db.query(
        "SELECT * FROM tech_professions WHERE profession = $1",
        [profession]
      );
      const result = dbResponse.rows.map((row) => ({
        ...row,
        skills: row.skills.split(",").map((skill) => skill.trim()),
      }));
      res.json(result);
    } catch (error) {
      console.error(`Error fetching ${profession}:`, error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
};

// General endpoint for all professions
app.get("/api/v1/tech-professions", async (req, res) => {
  try {
    const dbResponse = await db.query("SELECT * FROM tech_professions");
    res.json(dbResponse.rows);
  } catch (error) {
    console.error("Error fetching tech professions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Individual profession endpoints
professionEndpoint("/api/v1/FrontEndDeveloper", "Front-End Developer");
professionEndpoint("/api/v1/BackEndDeveloper", "Back-End Developer");
professionEndpoint("/api/v1/CybersecurityAnalyst", "Cybersecurity Analyst");
professionEndpoint("/api/v1/DevOpsEngineer", "DevOps Engineer");
professionEndpoint("/api/v1/DataScientist", "Data Scientist");
professionEndpoint("/api/v1/CloudEngineer", "Cloud Engineer");
professionEndpoint("/api/v1/FullStackDeveloper", "Full-Stack Developer");
professionEndpoint("/api/v1/UIUXDesigner", "UI/UX Designer");
professionEndpoint("/api/v1/MachineLearningEngineer", "Machine Learning Engineer");
professionEndpoint("/api/v1/MobileAppDeveloper", "Mobile App Developer");
