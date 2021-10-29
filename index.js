const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')

dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB connected!')
  })
  .catch((err) => console.log(err))

app.use(express.json())

app.use('/api/user', authRoutes)
app.use('/api/users', userRoutes)

app.listen(process.env.PORT || 3001, () => {
  console.log('Backend server is running')
})
