const mongoose = require('mongoose');


//mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;

const credSchema = new Schema({
    email: String,
    phone: String,
    password: String,
});

var credData = mongoose.model('credData',credSchema); 

//Exporting data
module.exports = credData;