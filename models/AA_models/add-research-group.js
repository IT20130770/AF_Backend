const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({

    research_topic:{
        type: String,
        required: true,
    },
    student1:{
        type: String,
        required: true,
    }, 
    email1: {
        type: Number,
        required: true,
    },

    phone1:{
        type: String,
        required: true,
    },
    
    student2:{
        type: String,
        required: true,
    }, 
    email2: {
        type: Number,
        required: true,
    },

    phone2:{
        type: String,
        required: true,
    },

    student3:{
        type: String,
        required: true,
    }, 
    email3: {
        type: Number,
        required: true,
    },

    phone3:{
        type: String,
        required: true,
    },

    student4:{
        type: String,
        required: true,
    }, 
    email4: {
        type: Number,
        required: true,
    },

    phone4:{
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('Products', productSchema);

