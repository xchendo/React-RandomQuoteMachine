const express = require('express');
const router = express.Router();

// import controller
const quoteController = require('../controllers/quoteController');

// object destructuring, allows us only to import only the object we need rather than the whole file
const { catchErrors } = require('../handlers/errorHandlers'); 

router.post('/random', quoteController.getRandomQuote);
router.post('/all', quoteController.getAllQuotes);
router.post('/all/page/:page', quoteController.getAllQuotes);
router.post('/add', catchErrors(quoteController.addQuote));
router.post('/:id', quoteController.getSpecificQuote);

module.exports = router;