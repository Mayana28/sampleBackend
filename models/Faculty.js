const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  number:{
    type:String,
    required:true,
    unique :true
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures no two users have the same email
    lowercase: true, // Convert email to lowercase before saving
    match: [
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Please fill a valid email address",
    ], // Regex to validate email
  },
  rfid:{
    type:String,
    required:true,
    unique:true
  }
});

const Faculty = mongoose.model("Faculty",facultySchema)
module.exports = Faculty;