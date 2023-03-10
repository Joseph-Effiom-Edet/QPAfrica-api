import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.js";
import postRoute from "./routes/post.js";
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB Connection Successful!!!"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Connected!!!");
});
