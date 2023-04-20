
// connects our .env file to our project
require("dotenv").config();
const express = require("express");
const app = express();
// Points to our environment file and puts the value of PORT from that variable into this PORT variable.
const PORT = process.env.PORT;
const log = console.log;


//Controllers
const users = require("./controllers/user.controller");
const movies = require('./controllers/movie.controller');

// Require in the mongoose middleware, pulled from node_modules
const mongoose = require("mongoose");
//create a variable for our connection address variable from the .env
const MONGO = process.env.MONGODB;

/* 
Use middleware handled/made by mongoose: 
    - Helps us connect to our DB and create objects in it
    - Establishes connection route to the DB with our .env var (This is a stateful connection).
    - We establish/create our connection with the middleware method: .connect()
    - Allows us to define the Collection we are targeting.
    * Doesn't display until there is a document within the collection.
*/
mongoose.connect(`${MONGO}/moviedb`);

// Create a variable that is an event listener to check if connected.
const db = mongoose.connection;

// Use the above variable to trigger event listener to check connection
db.once("open", () => log(`Connected: ${MONGO}`));

app.use(express.json())

//------------------------routes to controller
app.use("/user", users);
//http://localhost:4000/movies
app.use("/movies", movies);

app.listen(PORT, () => log(`Movie Server on Port: ${PORT}`));