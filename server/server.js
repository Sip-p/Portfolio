const express=require('express');
const dotenv=require('dotenv');
// const mongoose=require('mongoose');
const cors=require('cors');
const connectDB=require('./config/db');
dotenv.config();

const app=express();
app.use(express.json());
connectDB();
app.use(cors(
    {
        origin: 'http://localhost:5173', // Adjust this to your client URL
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }
))
const PORT=process.env.PORT||3000;


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
