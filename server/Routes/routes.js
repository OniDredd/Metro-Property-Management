const express = require('express')
const router = express.Router()
const { getData, setData, setImage, updateData, deleteData } = require('../Controllers/controller')

router.get('/', getData)

router.post('/', setData)
router.post('/upload-image', setImage)

router.put('/:id', updateData)

router.delete('/:id', deleteData)

module.exports = router