
const express = require('express')
const router = express.Router()
const {getHomePage, getImagePage} = require('../controllers/homeControllers')

router.get('/', getHomePage)

router.get('/getImage', getImagePage)

module.exports = router