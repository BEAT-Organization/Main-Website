const mongoose = require('mongoose');

const schema = mongoose.Schema;

const articleSchema = new schema({

    Author : {
        type: String,
        required: true
    },
    Date  : {
        type: Date,
        required: true
    },
    Topic  : {
        type: String,
        required: true
    },
    Content  : {
        type: String,
        required: true
    }
}, {timestamps:true});

const article = mongoose.model('article' , articleSchema);

module.exports = article;