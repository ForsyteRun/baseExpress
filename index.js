import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { registerValidation } from './validations/user.js'
import {validationResult} from 'express-validator'
import UserModel from './models/user.ts'

const app = express()

const URL = 'mongodb+srv://forsyterun:C6oTJ8IchNbIE65D@jewerly.eum5syn.mongodb.net/jewerly?retryWrites=true&w=majority'

mongoose.connect(URL).then(() => {
  console.log('start');
}).catch((error) => console.log(error))

app.use(express.json())

app.get('/', (req, res) => {
  res.send('115551 Forsyte')
})

app.post('/login', (req, res) => {

  const token  = jwt.sign({
    email: req.body.email,
    name: req.body.name
  }, 'secret')

  res.json(token)
})

app.post('/register', registerValidation, (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({errors: errors.array()})
  }

  const doc = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  
  res.status(200).json({success: true})

})

app.listen(4444, (err) => {     
  if (err) {
    console.log(err);
  } 
  console.log('start');
})