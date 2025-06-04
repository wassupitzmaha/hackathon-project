// We use express to create our servers endpoints, and listen for & respond to requests from the frontend
import express from "express";
// We use dotenv so that we can access our environment variables
import "dotenv/config";
// We import our index.js so that we can query our database
import * as db from "./db/index.js";

import express from "express";
import "dotenv/config";
const requestHandler = express();
const port = process.env.PORT || 3000;
requestHandler.use(express.json());
import "dotenv/config"


// Starting our http server and listening for requests!
requestHandler.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

// GET template
requestHandler.get("/api/v1/get-template", (req, res) => {
    res.send("Hello World!");
  });