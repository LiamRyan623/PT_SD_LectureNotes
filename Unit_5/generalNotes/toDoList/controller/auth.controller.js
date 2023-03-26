const router = require('express').Router();

// Build a .post() with the url of /register: htt://localhost:4000/todo/register
router.post("/register", (req, res) => {
    //check that the middleware is running
    //console.log("\n In auth controller:", req.datePosted);
    // Check the headers of the req
    //console.log("headers:", req.headers);
    // check the body of the req
    //console.log("body/content of req:", req.body);


    try {
    //dive into the req body and assign values to variables, object destructuring
    const { firstName, lastName, email, password } = req.body;

    res.status(200).send({
        fullName: `${firstName} ${lastName}`,
        email: email, 
        //password: password,
        date: req.datePosted,
    })
} catch (err) {
    res.status(500).send(
        `<img src="https://http.cat/500" alt="Status code 500"/>`
    )
}
})


module.exports = router