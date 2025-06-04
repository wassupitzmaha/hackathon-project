
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