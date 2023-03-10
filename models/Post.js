import mongoose from "mongoose";

//MONGOOSE SCHEMA THAT WILL BE USED TO INTERACT WITH THE USER COLLECTION IN THE DATABASE.
const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", PostSchema);
