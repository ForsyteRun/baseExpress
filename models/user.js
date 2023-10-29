import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true, 
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  meta: Number
}, {timestamps: true})

export default mongoose.model('User', userSchema)