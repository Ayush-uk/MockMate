import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


import connectDb from './config/connectDb.js';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import interviewRouter from './routes/interview.route.js';


dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true


}));

app.use(express.json());
app.use(cookieParser());
connectDb();
const PORT = process.env.PORT || 8080;

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use("/api/interview" , interviewRouter)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
