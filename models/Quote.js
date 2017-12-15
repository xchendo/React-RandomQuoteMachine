const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const quoteSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: 'Needs a quote',
  },
  author: {
    type: String,
    trim: true,
    required: 'Needs an author',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
/**
 * The _id field will be of type Number and increment automatically (similar to sql)
 * This is done so we have nicer looking urls (eg.api/quote/1)d
 * rather than (api/quote/crazy_mongodb_id_object)
 */
quoteSchema.plugin(autoIncrement.plugin, 'Quote');

module.exports = mongoose.model('Quote', quoteSchema);
