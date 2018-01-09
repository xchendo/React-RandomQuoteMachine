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

  /*
  const quote = new Quote(req.body).save(function (err, req1, res2, next) {
    if (err) { console.log(err); next(err);}
    res.send({
      status: 'Success',
      text: 'Successfully added your quote. Thanks for sharing!'
    }); 
  });*/
}

exports.getRandomQuote = (req, res) => {
  Quote.count().exec( (err, count) => {
    let random = Math.floor(Math.random() * count);
    Quote.findOne().skip(random).exec( (err, response) => {
      res.send(response);
    });
  });
}

exports.getSpecificQuote = (req, res) => {
  console.log(req.params.id);
  Quote.findOne({
    _id: req.params.id
  }, (err, quote) => {
    if (err) { next(err); }
    res.send(quote);
  });
}

// TODO: Add pagination (somehow..)
exports.getAllQuotes = (req,res) => {
  const page = req.params.page || 1;
  const limit = 5;
  const skip = (page * limit) - limit;
  Quote
    .find( (err, data) => {
      if (err) { next(err); }
      res.send(data);
    })
    .skip(skip)
    .limit(limit)
}