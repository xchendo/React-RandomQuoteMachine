const express = require('express');
const router = express.Router();

// import controller
const quoteController = require('../controllers/quoteController');

router.get('/add', quoteController.addQuote);

module.exports = router;