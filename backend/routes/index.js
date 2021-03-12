// Require The Express Framework
const express = require('express')

// Set The Express Router
const router = express.Router()

// Load The Routes
router.use('/calculate', require('./calculate'))
router.use('/users', require('./users'))

// Export Router
module.exports = router