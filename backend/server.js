// We use express to create our servers endpoints, and listen for & respond to requests from the frontend

// We use dotenv so that we can access our environment variables
import "dotenv/config";
// We import our index.js so that we can query our database
import * as db from "./db/index.js";

import express from "express";

const requestHandler = express();
const port = process.env.PORT || 3000;
requestHandler.use(express.json());
import "dotenv/config";

// Starting our http server and listening for requests!
requestHandler.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

requestHandler.get("/api/v1/tech-professions", async (req, res) => {
  try {
    const dbResponse = await db.query("SELECT * FROM tech_professions");
    res.json(dbResponse.rows); // Send only the data rows
  } catch (error) {
    console.error("Error fetching tech professions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

requestHandler.get("/api/v1/FrontEndDeveloper", async (req, res) => {
  try {
    const dbResponse = await db.query(
      "SELECT * FROM tech_professions WHERE profession= 'Front-End Developer' "
    );
    const result = dbResponse.rows.map((row) => ({
      ...row,
      skills: row.skills.split(",").map((skill) => skill.trim()),
    }));
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

requestHandler.get("/api/v1/BackEndDeveloper", async (req, res) => {
  try {
    const dbResponse = await db.query(
      "SELECT * FROM tech_professions WHERE profession= 'Back-End Developer' "
    );
    const result = dbResponse.rows.map((row) => ({
      ...row,
      skills: row.skills.split(",").map((skill) => skill.trim()),
    }));
    res.json(result);
  } catch (error) {
    console.error("Error fetching tech professions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

requestHandler.get("/api/v1/CybersecurityAnalyst", async (req, res) => {
  try {
    const dbResponse = await db.query(
      "SELECT * FROM tech_professions WHERE profession= 'Cybersecurity Analyst' "
    );
    const result = dbResponse.rows.map((row) => ({
      ...row,
      skills: row.skills.split(",").map((skill) => skill.trim()),
    }));
    res.json(result);
  } catch (error) {
    console.error("Error fetching tech professions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

requestHandler.get("/api/v1/DevOpsEngineer", async (req, res) => {
  try {
    const dbResponse = await db.query(
      "SELECT * FROM tech_professions WHERE profession= 'DevOps Engineer' "
    );
    const result = dbResponse.rows.map((row) => ({
      ...row,
      skills: row.skills.split(",").map((skill) => skill.trim()),
    }));
    res.json(result);
  } catch (error) {
    console.error("Error fetching tech professions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

requestHandler.get("/api/v1/DataScientist", async (req, res) => {
  try {
    const dbResponse = await db.query(
      "SELECT * FROM tech_professions WHERE profession= 'Data Scientist' "
    );
    const result = dbResponse.rows.map((row) => ({
      ...row,
      skills: row.skills.split(",").map((skill) => skill.trim()),
    }));
    res.json(result);
  } catch (error) {
    console.error("Error fetching tech professions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

requestHandler.get("/api/v1/CloudEngineer", async (req, res) => {
  try {
    const dbResponse = await db.query(
      "SELECT * from tech_professions WHERE profession = 'Cloud Engineer'"
    );
    const result = dbResponse.rows.map((row) => ({
      ...row,
      skills: row.skills.split(",").map((skill) => skill.trim()),
    }));
    res.json(result);
  } catch (error) {
    console.error("Error fetching tech professions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

requestHandler.get("/api/v1/FullStackDeveloper", async (req, res) => {
  try {
    const dbResponse = await db.query(
      "SELECT * from tech_professions WHERE profession = 'Full-Stack Developer'"
    );
    const result = dbResponse.rows.map((row) => ({
      ...row,
      skills: row.skills.split(",").map((skill) => skill.trim()),
    }));
    res.json(result);
  } catch (error) {
    console.error("Error fetching tech professions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

<<<<<<< HEAD
requestHandler.get("/api/v1/DataScientist", async (req, res) => {
  try {
    const dbResponse = await db.query(
      "SELECT * FROM tech_professions WHERE profession= 'Data Scientist' "
    );
    const result = dbResponse.rows.map((row) => ({
      ...row,
      skills: row.skills.split(",").map((skill) => skill.trim()),
    }));
    res.json(result);
  } catch (error) {
    console.error("Error fetching tech professions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

requestHandler.get("/api/v1/UIUXDesigner", async (req, res) => {
  try {
    const dbResponse = await db.query(
      "SELECT * FROM tech_professions WHERE profession= 'UI/UX Designer' "
    );
    const result = dbResponse.rows.map((row) => ({
      ...row,
      skills: row.skills.split(",").map((skill) => skill.trim()),
    }));
    res.json(result);
  } catch (error) {
    console.error("Error fetching tech professions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
=======
>>>>>>> upstream/main

requestHandler.get("/api/v1/MachineLearningEngineer", async (req, res) => {
  try {
    const dbResponse = await db.query(
      "SELECT * FROM tech_professions WHERE profession = 'Machine Learning Engineer' "
    );
    const result = dbResponse.rows.map((row) => ({
      ...row,
      skills: row.skills.split(",").map((skill) => skill.trim()),
    }));
    res.json(result);
  } catch (error) {
    console.error("Error fetching tech professions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

requestHandler.get("/api/v1/MobileAppDeveloper", async (req, res) => {
  try {
    const dbResponse = await db.query(
      "SELECT * FROM tech_professions WHERE profession = 'Mobile App Developer'"
    );
    const result = dbResponse.rows.map((row) => ({
      ...row,
      skills: row.skills.split(",").map((skill) => skill.trim()),
    }));
    res.json(result);
  } catch (error) {
    console.error("Error fetching tech profession:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
