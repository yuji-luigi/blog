import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import User from "./models/User.js";
import Blog from "./models/Blog.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected..."))
  .catch((error) => console.log(error));

app.get("/api/v1/blogs", (req, res) => {
  res.status(200).json({ msg: "These blog posts" });
});

app.get("/api/v1/blogs/:id", (req, res) => {
  res.status(200).json({ msg: "This is one blog post" });
});

app.get("/api/v1/user/", (req, res) => {
  res.status(200).json({ msg: "This is blog posts" });
});

app.get("/api/v1/user/:id", (req, res) => {
  res.status(200).json({ msg: "This is blog posts" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server is listnening at port http://localhost:${PORT}`)
);
