const mongoose = require('mongoose');

const uploadpdfSchema = new mongoose.Schema({
    
    markingupload:{
        type: String,
        required:true,
    },
    
    uploadName:{
        type: String,
          required: true
      }

});

const uploadpdf = mongoose.model("uploadmarking",uploadpdfSchema);
module.exports = uploadpdf;