const express = require('express');
const router = express.Router();
const pensionController = require('../controllers/pensionController');

// Example GET endpoint
router.get('/', pensionController.getPensionData);

module.exports = router;