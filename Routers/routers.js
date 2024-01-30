const express = require('express')
const router = express.Router()
const fun = require('../Controller/logic')

router.get('/', fun.getAllMethod)
.get('/:id', fun.getMethod)
.post('/', fun.postMethod)
.put('/:id', fun.putMethod)
.patch('/:id', fun.patchMethod)
.delete('/:id', fun.deleteMethod)

exports.router = router