import express from "express";
import { Post } from "../models/Post.js";

const router = express.Router();

router.post("/write", async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    desc: req.body.desc,
  });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
