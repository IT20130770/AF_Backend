const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const studentGroupSchema = new mongoose.Schema({
  
  group_name : {
    type: String,
    required: false,
    trim: true,
  },

  groupMembers: [{
    sid: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:"students"
    },

    student_id: {
      type: String,
     //require: true
    },
    name: {
      type: String,
      //required: true
    },
    email: {
      type: String,
      //required: true
    },
    phone: {
      type: String,
      required: false
    }
  }],

});



const studentGroup = mongoose.model("studentGroups", studentGroupSchema);

module.exports = studentGroup;