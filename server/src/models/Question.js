const { mongoose } = require("mongoose");
const { USER } = require('../data/Database');


const DATABASE_TABLE_NAME = "Question"
const questionSchema = new mongoose.Schema({
    QUESTION : {
        type: String,
        required: true
    },
    OPTIONS : []
})

module.exports = mongoose.model(DATABASE_TABLE_NAME, questionSchema);