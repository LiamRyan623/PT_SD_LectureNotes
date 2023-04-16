const router = require("express").Router();
const User = require("../models/users.model");
/* 
  require in the bcrypt dependency by storing it in a variable.
  bcrypt will be included in our controller --> add bcrypt in any file where we want encryption to take place.
*/
const bcrypt = require("bcrypt")
// require in the jsonwebtoken dependency by storing it in a var per usual.
const jwt = require("jsonwebtoken");
// Create a variable to hold the secret from our .env for the token.
const SECRET = process.env.JWT;


// create a function to show how our password is being used/encrypted. (Just a demo)

/* 
const testingBcrypt = (password) => {
   Storing in the variable name encrypt the ability to use bcrypt's hashSync method to encrypt our "password."
  let encrypt = bcrypt.hashSync(password, 13)
  console.log("ENCRYPTED PASSWORD: ", encrypt);
}

testingBcrypt('myPassword');
testingBcrypt('myPassword');
testingBcrypt('newPassword123');
 */
/* 
    ** IMPORTANT NOTE **
    It is required to use async/await with our callback functions per MongoDB.
        - It's a good idea regardless to do this simply because we are using request outside of our own workstation.
    We will build the rest of the endpoint/route with a request as response as we did in the last unit. Await/Async is the only new addition. 
*/
router.post("/signup", async (req, res) => {
  try {
    const user = new User({
      firstName: req.body.firstName,
      lastName:req.body.lastName,
      email: req.body.email,
      //password: req.body.password, Should not store plain text passwords in the DB
      // We want to pass in the password provided by the user, salt it 13 times, and add to db
      password: bcrypt.hashSync(req.body.password, 13)
    });
    const newUser = await user.save();

    // create a token using the sign method of jwt, (payload, message, exp)
    // The payload should be the user id. secret message should eventually be in .env
    const token = jwt.sign({id: user._id }, SECRET, "my super secret secret", {expiresIn:"1 day"});

    res.status(200).json({
      user: newUser,
      message: "Success! User Created!",
      token,
    });
  } catch (err) {
    res.status(500).json({
      ERROR: err.message,
    });
  }
});


/* 
---------------------------------
 */



// login endpoints use the .post() method as well.
// endpoint: http://localhost:4000/user/login
/* 
  Request body: req.body
  {
    "email": ""
  }
*/
router.post("/login", async (req, res) => {
 // res.send(req.body.email);
  try{
    //1. Capture data provided by user (request body).
    const {email, password} = req.body;

    //2. Check database to see if email supplied exists
      //* A MongoDB method that accepts a query as an argument. Returns an instance of a document that matches.
    // { email is key for what db is searching for : email = req.body.email from request}
    const user = await User.findOne({email: email});
    console.log(user);// checks to see if findOne is working.

    //write an error o catch if no user matches
    if (!user) throw new Error("User not found.")

    //3. If email exists, consider if password matches (decrypt).
      // .compare() method from bcrypt takes in 2 params(password from req.body, hashed password from db)
    const passwordMatch= await bcrypt.compare(password, user.password);
    console.log(passwordMatch) // check if .compare is working.

    // write an error to catch if password doesn't match,
    if (!passwordMatch) throw new Error("Email and or password does not match")

    //4. After verified, provide a jwt token
    const token = jwt.sign({id: user._id}, SECRET, {expiresIn: 60 * 60 * 24});

    //5. response status returned
    res.status(200).json({
      message: "Login successful",
      user,
      token
    });

  } catch (err) {
    res.status(500).json({
      msg: err.message
    })
  }

})

module.exports = router;