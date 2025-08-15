import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/databaseConnect.js'
import { uR } from './routers/userRoutes.js'
dotenv.config()
const app= express()
app.use(express.json())
connectDB()
app.use("/api/v1/",uR)
app.use("/",(req,res)=>{
res.json("heheheheheh")
})
const port = process.env.PORT||3000
app.listen(port,()=>console.log("server is running at "+ port)
)