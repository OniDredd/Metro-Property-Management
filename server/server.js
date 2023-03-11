const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./Config/db')

const port = process.env.PORT || 8000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.use('/test', require('./Routes/routes'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

