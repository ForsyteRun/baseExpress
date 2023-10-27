import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }, 
  meta: {
    type: Number
  }
})

export const User = mongoose.model('User', userSchema)

export type UserViewModel = {
  title: string;
  age: number;
};
