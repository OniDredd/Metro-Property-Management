const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./Config/db')
const cors = require('cors')

const port = process.env.PORT || 8000

connectDB()

const app = express()

app.use(cors())

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/Listings', require('./Routes/routes'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

