//Access Mongoose packages
const mongoose = require('mongoose');

//Database connection
//mongoose.connect('mongodb://localhost:27017/library');

//Schema Definition
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  genre: String,
  image: String,
  bio: String
});

// Model Creation
var bookData = mongoose.model('bookData',bookSchema); 

//Exporting data
module.exports = bookData;
