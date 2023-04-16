 require("dotenv").config();
const express = require('express')
const app = express();

const PORT = process.env.port;

//controllers
const character = require("./controller/character.controller");

// Middleware
app.use(express.json());

// Routes
app.use("/characters", character);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });