import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type: String,
    required: false,
  },
  body: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Blog", blogSchema);
