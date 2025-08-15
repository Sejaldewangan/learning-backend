import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    userEmail: {
      type: String,
      required: true,
      trim: true,
    },
    userPassword: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);


const module = mongoose.model("User",userSchema)
export default module ;