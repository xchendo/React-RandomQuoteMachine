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


exports.addQuote = (req, res) => {
  let test = {
    text: req.body.text,
    author: req.body.author
  };
  
  const quote = new Quote(test).save(function (err, req1, res2, next) {
    if (err) { console.log(err); next(err);}
    res.send({
      status: 'Success',
      text: 'Successfully added your quote. Thanks for sharing!'
    }); 
  });
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

// Make this one internal only, so as to not overload the server
exports.getAllQuotes = (req,res) => {
  Quote.find( (err, data) => {
    if (err) { next(err); }
    res.send(data);
  });
}