import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    email :{
        type:String,
        required:true,
        unique:true,
        lowercase: true,
        trim: true,
        match:[/^\S+@\S+\.\S+$/, "Please use a valid email"]
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim: true
    },
    profilePicture:{
        type:String,
        default:""  
    }
},
    {timestamps:true});

export default mongoose.model("User",userSchema);