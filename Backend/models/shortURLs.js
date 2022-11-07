const mongoose = require('mongoose');

const shortURLSchema = new mongoose.Schema({
    encodeURL: {
        type: String,
        required: true
    },
    realURL: {
        type: String,
        required: true
    },
    counter: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('shortURL', shortURLSchema);