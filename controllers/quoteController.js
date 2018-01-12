const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
/*
* Todo
* x Get random quote
* Get {n} random quotes
* Get all quotes
* x Add quotes
* Possible to implement some middleware to check if that quote exists already?
*
*/

const status = {
  error: "Error",
  success: "Success"
};


exports.addQuote = async (req, res) => { // put async in front of the function that is making a request
  //async await boi
  const quote = new Quote(req.body);
  await quote.save(); // put await in the code that returns the promise
  res.send({
    status: 'Success',
    text: 'Successfully added your quote. Thanks for sharing!'
  });
}

exports.getRandomQuote = async (req, res) => {
  const count = await Quote.count()
    .exec();
  let random = Math.floor(Math.random() * count);
  
  const quote =  await Quote.findOne()
    .skip(random)
    .exec();

  res.send(quote);
}

exports.getSpecificQuote = (req, res) => {
  Quote.findOne({
    _id: req.params.id
  }, (err, quote) => {
    if (err) { next(err); }
    res.send(quote);
  });
}

// return 5 quotes and the total quotes count
exports.getAllQuotes = async (req,res) => {
  const page = req.params.page || 1;
  const limit = 5;
  const skip = (page * limit) - limit;

  const quotePromise = Quote.find()
    .skip(skip)
    .limit(limit);

  const quoteCount = Quote.count();
  const [quotes, count] = await Promise.all([quotePromise, quoteCount]);

  const pages = Math.ceil(count / limit);
  res.send({
    pages,
    count,
    quotes
  });
}