const express = require('express');
const router = express.Router();

// import controller
const quoteController = require('../controllers/quoteController');

router.post('/random', quoteController.getRandomQuote);
router.post('/all', quoteController.getAllQuotes);
router.post('/add', quoteController.addQuote);

module.exports = router;