import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';


//REGISTER USER
export const register=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        //check if user exists
        const existingUser =await User.findOne({username});
        if(existingUser)
            return res.status(400).json({message:"User already exists"});
        //Hash the password
        const hashedPassword=await bcrypt.hash(password,10);
        //create a new user and save to the db
        const newUser=new User({
            username,
            email,
            password:hashedPassword
        });
        await newUser.save();
        res.status(201).json({message:"User Registered Successfully",user:newUser});


    }catch(error){
        res.status(500).json({message:error.message});
    }
}

//LOGIN USER
export const login=async(req,res)=>{
    try{
        const {username,password}=req.body;

        //check if user exists
        const user=await User.findOne({username});
        if(!user)
            return res.status(400).json({message:"Invalid Username"});

        //check Password
        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(!isPasswordValid)
            return res.status(400).json({message:"Invalid Password"});

        //generate JWT token and send to the user
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:"7d"});
        // res.json({ token });
        res.cookie("token",token,{httpOnly:true,secure:false}).json({message:"Login Successful"});   


    }catch(error){
        res.status(500).json({message:error.message});
    }
}

//LOGOUT USER
export const logout=async(req,res)=>{
    res.clearCookie("token").json({message:"Logout Successfully"});

}