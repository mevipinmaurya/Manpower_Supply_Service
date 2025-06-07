import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import databaseConnection from './config/database.js';
import userRouter from './routes/UserRouter.js';
import blogRouter from './routes/BlogRouter.js';
import serviceRouter from './routes/ServiceRouter.js';
import cartRouter from './routes/CartRouters.js';
import paymentRouter from './routes/PaymentRouter.js';
import Razorpay from 'razorpay';

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure env
dotenv.config();

// Express app
const app = express();
const port = process.env.PORT || 4000;

// Razorpay instance
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

// DB connection
databaseConnection();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: ['http://localhost:5173'], // Update in prod if needed
  credentials: true
}));

// API Routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/user', blogRouter);
app.use('/api/v1/user', serviceRouter);
app.use('/api/v1/user', cartRouter);
app.use('/api/v1/user', paymentRouter);

// Serve static frontend
app.use(express.static(path.join(__dirname, '../Frontend/dist')));

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
