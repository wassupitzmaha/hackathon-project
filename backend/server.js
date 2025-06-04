
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