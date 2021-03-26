const express = require("express");
// Set up express routes
const router = express.Router();

// Require the movie model to push movie data
const Movie = require("../models/Movie.model");

router.get("/", (req, res) => {
  Movie.find({}).then((allMovies) => {
    res.render("movies", { movieList: allMovies });
    // console.log(allMovies);
  });
});

module.exports = router;
