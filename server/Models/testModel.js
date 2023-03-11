const mongoose = require('mongoose')
const { stringify } = require('querystring')

const testSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Test', testSchema)