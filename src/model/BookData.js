//Access Mongoose packages
const mongoose = require('mongoose');

//Database connection
mongoose.connect('database_connection_link');

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
