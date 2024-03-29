// Access Express & it's methods; we can do that via require()
const express = require('express'); // pulled from node modules
// We want a simple var to make calls, set express to app
const app = express();// simplify our method calls.
// Create a PORT number to run the app on our local machine.
// Server port within localhost. Using all caps indicates a "general variable."
const PORT = 4000;




//------------------- Required file paths-------------------
// Create a variable that imports the practice controller.
const practiceController = require('./controller/practice.controller');
// Require in the index.js from helpers( ./helpers) w/ object destructuring
const auth = require("./controller/auth.controller");

const routes = require("./controller/routes.controller")

const { logTime } = require('./helpers');



// create a variable to require in and have CORS dependency accessible
const cors = require('cors');

//------------------------App functionality/ what it does next---------------------------
app.use(logTime);

app.use(express.json());


//
app.use(express.urlencoded());

//runs the cors preflight request prior to hitting our endpoints/routes
// Allows all CORS requests
app.use(cors());




// use a method called .use(). This points our express app to where it should go.
// Call the app var, use the .use() method. Specify using the express to target the public folder. note: When a file is not specified, JS always defaults to seeking an index file.
// __dirname comes from node. (it's accessible whenever)
app.use(express.static(`${__dirname}/public`));
console.log('Pathway: ', __dirname); // rout us to the public folder.


// Building route to practice controller.
// First we will call on our app variable. Then we will use the .use() method, we pass a use() a string that becomes the url route and the controller that route takes you to.
/*Any traffic coming in that has "practice" after localhost:4000 will route to practice.controller.js.
ex: localhost:4000/practice
*/

app.use('/practice', practiceController);

// Building route to auth controller: http://localhose:4000/todo
app.use("/todo", auth);

//route to routes controller: http://localhose:4000/
app.use("/routes", routes);


// Create a method that "listens" for us spinning up/starting our application 
// This will need our PORT number and a call back function.
// First call our "app" variable, use the .listen method, pass that method the port variable, and create a callback function to give us some feedback(console.log) to affirm it's running
app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`)
})

// To start server, in terminal at the project directory(the folder) run command "nodemon".
