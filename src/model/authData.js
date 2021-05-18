//Access Mongoose packages
const mongoose = require('mongoose');

//Database connection

// mongoose.connect('mongodb://localhost:27017/library');

//Schema Definition
const Schema = mongoose.Schema;

const authSchema = new Schema({
    name: String,
    image: String,
    bio: String,
    bio2: String
});

// Model Creation
var authData = mongoose.model('authData',authSchema); 

//Exporting data
module.exports = authData;
