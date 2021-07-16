const mongoose = require('mongoose');

const schema = mongoose.Schema;

const contactUsSchema = new schema({

    Name : {
        type: String,
        required: true
    },
    Email  : {
        type: String,
        required: true
    },
    Message  : {
        type: String,
        required: true
    }
}, {timestamps:true});

const contact = mongoose.model('Contact Us' , contactUsSchema);

module.exports = contact;