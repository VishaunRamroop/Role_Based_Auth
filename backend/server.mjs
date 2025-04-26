import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.mjs';
import authRoutes from './routes/auth_routes.mjs'
import adminRoutes from './routes/admin_routes.mjs';
import userRoutes from './routes/user_routes.mjs'
import productRoutes from './routes/product_routes.mjs';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));
app.use(cors({origin:'http://localhost:5173',credentials:true}))
app.use('/api/auth',authRoutes);
app.use('/api/admin',adminRoutes);
app.use('/api/user',userRoutes);
app.use('/api/product',productRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{console.log(`Listening to port :${PORT}`),connectDB()});