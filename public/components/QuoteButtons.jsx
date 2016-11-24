var React = require('react');

var QuoteButtons = React.createClass({

  handleNewQuote: function(){
    var quotesObject = [{
      id: 0,
      author: 'toots',
      quote: 'Hello There'
    },
    {
      id: 1,
      author: 'Me',
      quote: 'Byeee'
    }
  ];
    var chosenQuote = this.pickQuote(quotesObject);
    this.props.onNewData(chosenQuote);
  },
  pickQuote: function(quotesObject){
    var min = Math.ceil(0);
    var max = Math.floor(quotesObject.length);
    var randomQuoteIndex = Math.floor(Math.random() * (max - min)) + min;
    return quotesObject[randomQuoteIndex];
  },

  render: function(){
    return(
      <div>
      <button onClick ={this.handleNewQuote}>New Quote</button>
      <button>Tweet this quote!</button>
      </div>
    );
  }
});

module.exports = QuoteButtons;
