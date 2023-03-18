const mongoose = require('mongoose')
const { stringify } = require('querystring')

const listingSchema = mongoose.Schema({
    name: {
        type: String,
    },
    location: {
        type: String,
    },
    price: {
        type: String,
    },
    bedcount: {
        type: String,
    },
    showercount: {
        type: String,
    },
    garagecount: {
        type: String,
    },
    image: {
        type : String,
    }
})

module.exports = mongoose.model('Listing', listingSchema)