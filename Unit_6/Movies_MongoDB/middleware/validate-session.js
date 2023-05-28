//bring in JWT to access it's token methods/functionality
const jwt = require("jsonwebtoken");
//bring in user model to reference
const user = require("../models/users.model.js");


const validateSession = async (req, res, next) => {
    // Middleware still has access to the request, response, and requires the next() function to move past it.
    //* remember the timeLog() helper within the ToDo_List
try {
    //1. Take token provided by request object (headers.authorization)
    const token = req.headers.authorization;
    console.log(token)
    //2. Check the status of token. (expired?)
    const decodedToken = await jwt.verify(token, process.env.JWT)
    console.log(decodedToken)
    //3. Provide response - if valid, generate a variable that holds user info.
    const user = await User.findById(decodedToken.id);
    if(!user) throw Error("User not Found")

    // good idea to use a console.log to make sure it's working.
    

    return next ();// moves us onto our routes/endpoint
} catch (err) {
    res.json({message: err.message});

};
};

module.exports = validateSession;