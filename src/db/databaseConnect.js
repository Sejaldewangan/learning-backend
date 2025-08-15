import mongoose from 'mongoose'
import dotenv from'dotenv'
dotenv.config()
const DB = process.env.DB_URL
export async function connectDB() {
   try {
     await mongoose.connect(DB,{name:"backend work"})
     console.log("DB aagaya bhiya ....................");
     
   } catch (error) {
    console.log({errorMessageIs:error.message});
    
   }
}