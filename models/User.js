import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  surname: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
});

export default mongoose.model("User", userSchema);
