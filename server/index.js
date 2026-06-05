import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"

dotenv.config()

const app = express()

// CRITICAL FIX 1: Tell Express to trust Render's proxy configuration
// This allows cookies with 'secure: true' to be successfully received/sent over HTTPS on Render
app.set('trust proxy', 1)

const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:5174",
    
    "https://interview-aiii.netlify.app"
]

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true
}))

// CRITICAL FIX 2: Move cookie parser higher up so incoming cookies are readable
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview", interviewRouter)
app.use("/api/payment", paymentRouter)

// const PORT = process.env.PORT || 6000
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectDb()
})
