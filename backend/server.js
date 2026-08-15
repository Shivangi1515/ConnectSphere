import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(postRoutes);
app.use(userRoutes);


const PORT = process.env.PORT || 8080;

const start = async () => {
    
    const connectDB= await mongoose.connect(process.env.MONGO_URI)

    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
    
};

start();