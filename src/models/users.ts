import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  age: String,
  meta: Number
})

export const User = new mongoose.Model('user', userSchema)