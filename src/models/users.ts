import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  age: Number,
  meta: Number
})

export const User = mongoose.model('user', userSchema)