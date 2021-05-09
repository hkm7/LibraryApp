//Access Mongoose packages
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://hrishi:BhbQd6P2sVFYSxQ@hkm7.js3cl.mongodb.net/library?retryWrites=true&w=majority');

//Schema Definition
const Schema = mongoose.Schema;

const userSchema = new Schema({
    phone: String,
    email: String,
    password: String
});

// Model Creation
var userData = mongoose.model('userData',userSchema); 

//Exporting data
module.exports = userData;