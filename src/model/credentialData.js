const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://hrishi:BhbQd6P2sVFYSxQ@hkm7.js3cl.mongodb.net/library?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;

const credSchema = new Schema({
    email: String,
    phone: String,
    password: String,
});

var credData = mongoose.model('credData',credSchema); 

//Exporting data
module.exports = credData;