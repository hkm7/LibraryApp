//Access Mongoose packages
const mongoose = require('mongoose');

//Database connection
// mongoose.connect('mongodb+srv://hrishi:BhbQd6P2sVFYSxQ@hkm7.js3cl.mongodb.net/library?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/library');

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
