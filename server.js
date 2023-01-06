import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import authRouter from "./router/authRouter.js";
import signRouter from "./router/signRouter.js";
import todoRouter from "./router/todoRouter.js";


const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
dotenv.config()
/*
app.use('/user', userRouter)
app.use('/login', loginRouter)
app.use('/diary', diaryRouter)
*/
app.use('/', authRouter)
app.use('/sign', signRouter)
app.use('/todo', todoRouter)


app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(console.log("connect to db"))
    .catch((err) => err)
})