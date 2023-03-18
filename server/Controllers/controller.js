const { ok } = require('assert')
const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')

require('../Models/listingModel')

const Listing = mongoose.model('Listing')


// @desc get data
// @route GET /test/
// @access Private
const getData = asyncHandler(async (req, res) => {
    const listing = await Listing.find()

    res.status(200).json(listing)
})

// @desc set data
// @route POST /test/
// @access Private
const setData = asyncHandler(async (req,res) => {
    res.status(200).json({message:  'Post is working'})
})


const setImage = asyncHandler(async (req,res) => {
    const {base64} = req.body
    try {
        Listing.create({image:base64})

        res.send({Status: ok})
    } catch (error) {
        res.send({Satus:error, data:error})
    }    
})
// @desc update data
// @route PUT /test/:id
// @access Private
const updateData = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Update is working ${req.params.id}`})
})

// @desc get data
// @route DELETE /test/:id
// @access Private
const deleteData = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Delete is working ${req.params.id}`})
})

module.exports = {
    getData,
    setData,
    setImage,
    updateData,
    deleteData,
}