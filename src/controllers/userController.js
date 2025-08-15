import mongoose from "mongoose";
import User from "../models/userModel.js";
export async function getAllUsers(req, res) {
  try {
    const users =await User.find().select("-userPassword");
    return res.json({
      message: "user found succesfull",
      data: users,
    });
  } catch (error) {
    return error.message({
      message: "user did not found succesfull",
      data: null,
    });
  }
}
export async function getOneUser(req, res) {
  try {
    const { id } = req.params;
    const users =await User.findById(id).select("-userPassword");
    return res.json({
      message: "user found succesfull",
      data: users,
    });
  } catch (error) {
    return res.json( error.message({
      message: "user did not found succesfull",
      data: null,
    }))
  }
}
export async function createUsers(req, res) {
  try {
    const { userPassword,userEmail, userName } = req.body;
    const isAlreadyExist = await User.findOne({userEmail });

    if (isAlreadyExist) {
      return res.json({
        message: "user already exist please login ..",
        data: null,
      });
    }

    // const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
     userPassword,userEmail, userName
    });

    return res.json({
      message: "user created successfully ",
      data: user,
    });
  } catch (error) {
    return res.json({
      message: error.message,
      data: null,
    });
  }}

