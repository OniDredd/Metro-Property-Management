const asyncHandler = require('express-async-handler')

// @desc get data
// @route GET /test/
// @access Private
const getData = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get is working' })
})

// @desc set data
// @route POST /test/
// @access Private
const setData = asyncHandler(async (req,res) => {
    res.status(200).json({message:  'Post is working'})
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
    updateData,
    deleteData,
}