const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false }))

app.use('/test', require('./Routes/routes'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})