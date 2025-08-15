import mongoose from "mongoose";
import User from '../models/userModel.js'
export async function getAllUsers(req,res) {
    const {userName, userEmail,userPassword  }=req.body

   try {
     const alredyUserExsists =await User.find({userEmail})
    if (alredyUserExsists) {
        res.json("user already exisists")
    }
const allUsers
   } catch (error) {
    res.json({error:error.message})
   }

}

