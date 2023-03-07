import express from "express";
import { User } from "../models/user.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong Email!!!");

    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    );

    const password = decryptedPassword.toString(CryptoJS.enc.Utf8);

    password !== req.body.password && res.status(401).json("Wrong Password!!!");

    // const accessToken = jwt.sign(
    //   {
    //     id: user._id,
    //   },
    //   process.env.JWT_SECRET_KEY,
    //   {}
    // );

    res
      // .cookie("accessToken", accessToken, { httpOnly: true })
      .status(200)
      .json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
