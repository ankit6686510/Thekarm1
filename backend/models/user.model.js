import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true // Indexing for faster queries (costly opertions)
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true,
        minlength:6 // Ensure a minimum password length
    },
    role:{
        type:String,
        enum:['student','recruiter','admin'],
        default:'student',
        required:true
    },
    profile:{
        bio:{type:String}, 
        skills:[{type:String}],
        resume:{type:String}, 
        resumeOriginalName:{type:String}, // Original name of resume
        company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'}, // Company ID
        profilePhoto:{
            type:String,
            default:""
        }
    },
},{timestamps:true});
export const User = mongoose.model('User', userSchema);