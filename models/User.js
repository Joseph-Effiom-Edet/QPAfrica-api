import mongoose from "mongoose";

//MONGOOSE SCHEMA THAT WILL BE USED TO INTERACT WITH THE USER COLLECTION IN THE DATABASE.
const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
