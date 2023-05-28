const router = require("express").Router();
const Movie = require("../models/movie.model");


// Way to use validate sessin directly in the controller and endoints:
const validateSession = require("../middleware/validate-session");


// Error Response Function
const errorResponse = (res, error) => {
    return(
        res.status(500).json({
            Error: error.message
        })
    );
}

//TODO POST

// http://localhost:4000/movies/

//* Adding validate session to grab user._id from token to save to DB
router.post('/', async (req,res) => {
    try {
        
        //1. Pull data from client (body)
        const { title, genre, rating, length, releaseYear} = req.body;
        //2. Create a new object using the Model
        const movie = new Movie({
            title, genre, rating, length, releaseYear, owner_id: req.user_id
        });
        //3. Use mongoose method to save to MongoDB
        const newMovie = await movie.save();
        //4. client response
        res.status(200).json({
            message: "Movie added,",
            movie,
          });
    } catch (err) {
        errorResponse(res, err);
    }
});

//TODO GET One
/* 
   Challenge
        - By ID
        - Response should consider
            - If found
            - If no document found
        
        Hint: Consider login within user.controller.js

*/

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const movie = await Movie.findOne({_id: id});
    
        res.status(200).json({
          status: `Found movie at id: ${id}`,
          movie,
        });
        //console.log(movie);
  
        } catch (err) {
      errorResponse(res, err);
      message
    }
  });

//TODO Get All
/* 
   Challenge
        - No special endpoing necessary
        - Response should consider
            - If found
            - not found
        
        
        Hint: parameters within method are optional
*/

//* Adding validate session by passing it in as a parameter for the endpoint.
router.get("/", validateSession, async (req, res) => {
    try {
        
        const getAllMovies = await Movie.find();

        getAllMovies ?
            res.status(200).json({
                getAllMovies
            }) :
            res.status(404).json({
                message: `No movies found.`
            });
  
        } catch (err) {
      errorResponse(res, err);
    }
  });

//TODO Get All by Genre

/* 
   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Consider parameter casing within the endpoint.
            - hint: conditional w/ looping
*/

router.get("/genre/:genre", async (req, res) => {
    try {
        const {genre} = req.params;

        const movieGenre = await Movie.find({genre: genre});
    
        res.status(200).json({
          status: `Found movie at genre: ${genre}`,
          movieGenre,
        });
        console.log(movieGenre);
  
        } catch (err) {
      errorResponse(res, err);
    }
  });

//TODO PATCH One
router.patch('/:id', async (req, res) => {
  try {
      //1. Pull value from parameter
      const id = req.params.id;

      //2. Pull data from the body.
      const info = req.body;

      //3. Use method to locate document based off ID and pass in new information.
      const returnOption = {new: true};

      const updatedMovie = await Movie.findOneAndUpdate({_id: id}, info, returnOption);

      //4. Respond to client.
      res.status(200).json({
        message: `${updatedMovie.title} has been updated successfully.`,
        updatedMovie,
      });

  } catch (err) {
      errorResponse(res, err);
  }
});

//TODO Delete One
router.delete('/:id', async (req,res) => {
  try {
      //1. Capture ID
      const id = req.params.id;
      //2. use delete method to locate and remove based off ID
      const deletedMovie = await Movie.deleteOne({_id: id})
      //3. Respond to Client
      res.status(200).json({
        message: `Movie has been deleted successfully.`,
      deletedMovie,
      })
        
  } catch (err) {
      errorResponse(res, err);
  }
});

module.exports = router;