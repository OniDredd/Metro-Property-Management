const express = require('express')
const router = express.Router()
const { getData, setData, updateData, deleteData } = require('../Controllers/controller')

router.get('/', getData)

router.post('/', setData)

router.put('/:id', updateData)

router.delete('/:id', deleteData)

module.exports = router