import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    trim: true
  },
  
} , {timestamps: true});

export  const Skill = mongoose.model('Skill', skillSchema);

//Represents skills that can be linked to jobs or user profiles