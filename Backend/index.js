import express from 'express'
import dotenv from 'dotenv'
import databaseConnection from './config/database.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/UserRouter.js';
import cors from 'cors'
import blogRouter from './routes/BlogRouter.js';
import serviceRouter from './routes/ServiceRouter.js';
import cartRouter from './routes/CartRouters.js';

import Razorpay from 'razorpay'
import paymentRouter from './routes/PaymentRouter.js';
const app = express();

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET
})

// app.post("/payment/process", processPayment)
// app.route("/payment/process").post(processPayment)


dotenv.config({
    path: ".env"
})
const port = process.env.PORT || 4000

// Database Connections
databaseConnection();

// Middlewares
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser())
// app.use(cors())
const corsOption = {
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
}
app.use(cors(corsOption))


// API Endpoints
app.use("/api/v1/user", userRouter)
app.use("/api/v1/user", blogRouter)
app.use("/api/v1/user", serviceRouter)
app.use("/api/v1/user", cartRouter)
app.use("/api/v1/user", paymentRouter)

app.get("/", (req, res) => {
    res.send("I am root");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})