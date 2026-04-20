import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieparser from 'cookie-parser';
import authRoute from './routes/authRoute.js';
import postRoute from './routes/postRoute.js';


dotenv.config();
const app=express();
app.use(cookieparser());
app.use(express.json());

//Connect to Mongodb
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{console.log("MongoDB Connected")})
    .catch(err=>{console.log(err)});

app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.use('/auth',authRoute);
app.use('/posts',postRoute);
app.listen(8080,()=>{
    console.log('Server is running on port 8080');
});
