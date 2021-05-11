const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hrishi:BhbQd6P2sVFYSxQ@hkm7.js3cl.mongodb.net/library?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const signupSchema = new Schema({
    email: String,
    phone: String,
    password: String,
});

var signupData = mongoose.model('signupData',signupSchema); 

//Exporting data
module.exports = signupData;