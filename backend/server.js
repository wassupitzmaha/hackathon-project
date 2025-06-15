// We used express to create our server's endpoints and listen for & respond to requests from the frontend

import "dotenv/config"; //loads environment variables from the .env file
import * as db from "./db/index.js"; //imports all exports from index.jsx as db object
import express from "express"; //imports express.js framework

const app = express(); //Initializes an express application instance
const port = process.env.PORT || 3000; //sets the server port preferring environment variable port

app.use(express.json()); //middleware parsing Json request bodies. 

// Start the HTTP server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Utility function to handle profession endpoints
const professionEndpoint = (route, profession) => {
  app.get(route, async (req, res) => { //defines a GET route for a specific profession
    try {
      const dbResponse = await db.query( //executes a sql query to fetch profession data. the await keyword ensures that the server waits for the response from the SQL query before responding
        "SELECT * FROM tech_professions WHERE profession = $1", //this is the SQL query, $1 is the parameterized query placeholder. the real value in the placeholder is stored in the array {profession}
        [profession]
      );
      const result = dbResponse.rows.map((row) => ({ //processes database rows. the dbResponse.rows contains an array of Javascript objects where each object represents a row from your tech_professions table
        ...row, //spreads existing row properties
        skills: row.skills.split(",").map((skill) => skill.trim()), //splits skills strings into an array
      }));
      res.json(result); //sends the process data as JSON response
    } catch (error) { //try catch block
      console.error(`Error fetching ${profession}:`, error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
};

// General endpoint for all professions
//api/v1 is the route and the part after the comma is the callback
app.get("/api/v1/tech-professions", async (req, res) => {
  try {
    const dbResponse = await db.query("SELECT * FROM tech_professions");  //fetches all tech professions
    res.json(dbResponse.rows); //sends all rows as JSON response
  } catch (error) {
    console.error("Error fetching tech professions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Individual profession endpoints - created using a utility function
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
