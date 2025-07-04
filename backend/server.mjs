import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.mjs';
import authRoutes from './routes/auth_routes.mjs'
import adminRoutes from './routes/admin_routes.mjs';

import productRoutes from './routes/product_routes.mjs';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname,'../frontend/dist')))
app.use(express.urlencoded({extended:true}));

app.use(express.json({extended:true}));

app.use(cors({origin:'http://localhost:5173',credentials:true}));

app.use(compression());

app.use('/api/auth',authRoutes);

app.use('/api/admin',adminRoutes);

app.use('/api/product',productRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{console.log(`Listening to port :${PORT}`),connectDB()});

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', '../frontend/dist/index.html'));
});