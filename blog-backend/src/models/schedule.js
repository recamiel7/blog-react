const mongoose = require('mongoose');

const {Schema} = mongoose;

const Schedule = new Schema({
    title: String,
    body: String,
    publishedDate: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Schedule', Schedule);