import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()

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

app.listen(4444, (err) => {     
  if (err) {
    console.log(err);
  } 
  console.log('start');
})