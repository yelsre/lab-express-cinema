const express = require("express");
// Set up express routes
const router = express.Router();

// Require the movie model to push movie data
const Movie = require("../models/Movie.model");

router.get("/:id", (req, res) => {
  Movie.findById(req.params.id).then((foundMovie) => {
    res.render("movie", { foundMovie });
    // console.log(allMovies);
  });
});

router.get("/", (req, res) => {
  res.redirect("/");
});

module.exports = router;
