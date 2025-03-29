import express from 'express'
import dotenv from 'dotenv'
import databaseConnection from './config/database.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/UserRouter.js';
import cors from 'cors'

const app = express();

dotenv.config({
    path: ".env"
})
const port = process.env.PORT || 4000

// Database Connections
databaseConnection();

// Middlewares
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(cookieParser())
// app.use(cors())
const corsOption = {
    origin : "http://localhost:5173",
    credentials : true,
}
app.use(cors(corsOption))


// API Endpoints
app.use("/api/v1/user", userRouter)

app.get("/", (req, res)=>{
    res.send("I am root");
})

app.get("/home", (req, res)=>{
    res.send("I am home wala page")
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})