const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: 'Needs a quote'
  },
  author: {
    type: String,
    trim: true,
    required: 'Needs an author'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Quote', quoteSchema);