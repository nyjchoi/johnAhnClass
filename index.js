const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nyjchoi:chldudwo1@nyjchoi.mglrg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))




app.get('/', (req, res) => {
  res.send('Hello World! 안녕하신가')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})