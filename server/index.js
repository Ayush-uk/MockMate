import express from 'express';
import dotenv from 'dotenv';


import connectDb from './config/connectDb.js';

dotenv.config();

const app = express();
connectDb();

const PORT = process.env.PORT || 8080;
app.get('/', (req,res)=>{
    return res.json({message: 'Hello World'});
} )

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})