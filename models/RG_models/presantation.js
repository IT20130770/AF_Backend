const mongoose = require('mongoose');

const presantationpdfSchema = new mongoose.Schema({
    
    presantationpdfupload:{
        type: String,
        required:true,
    },
    
    docName:{
        type: String,
          required: true
      }

});

const Presantationpdf = mongoose.model("presantationpdf",presantationpdfSchema);
module.exports = Presantationpdf;