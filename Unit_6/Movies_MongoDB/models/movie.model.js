/* 
  Challenge
    - Create a Schema called MovieSchema
    - Properties within:
        "title": string, required
        "genre": string
        "rating": string, required
        "length": number, required
        "releaseYear": number
        
    Note:
        Consider how the User model was created.
*/

const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    genre: {
        type: String,
    },
    rating: {
        type: String,
        require: true,
    },
    length: {
        type: Number,
        require: true,
    },
    releaseYear: {
        type: Number,
    }
});

module.exports = mongoose.model("Movie", MovieSchema);