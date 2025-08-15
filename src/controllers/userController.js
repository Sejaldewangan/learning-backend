import mongoose from "mongoose";
import User from '../models/userModel.js'
export async function getAllUsers(req,res) {
   try {
     const users = User.find().select("-userPassword")
    return ( res.json({
        message:"user found succesfull",
        data: users
    }))
   } catch (error) {
      return error.message ({
        message:"user did not found succesfull",
        data: null
    })
     
   }


   

}

