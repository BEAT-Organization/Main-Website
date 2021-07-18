const mongoose = require('mongoose');

const schema = mongoose.Schema;

const magazineSchema = new schema({

    
    ID  : {
        type: Number,
        required: true
    },
    Name  : {
        type: String,
        required: true
    }
}, {timestamps:true});

const magazine = mongoose.model('magazine' , magazineSchema);

module.exports = magazine;