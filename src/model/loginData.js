const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hrishi:BhbQd6P2sVFYSxQ@hkm7.js3cl.mongodb.net/library?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const loginSchema = new Schema({
    email: String,
    password: String,
});

var loginData = mongoose.model('loginData',loginSchema); 

//Exporting data
module.exports = loginData;