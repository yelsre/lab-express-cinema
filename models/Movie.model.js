//Iteration 1 | Seed the database

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Iteration 1 - Recipe Schema
const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  director: {
    type: String,
    required: true,
  },
  stars: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  showtimes: {
    type: [String],
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
