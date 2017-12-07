var React = require('react');
var quotesObject = require('QuotesObject');
import api from 'API';

var QuoteButtons = React.createClass({

  handleNewQuote: function(){
    api.getRandomQuote().then(resp =>{
      this.props.onNewData(resp.data);
    });
    //var chosenQuote = this.pickQuote(quotesObject);
    //this.props.onNewData(chosenQuote);
  },
  pickQuote: function(quotesObject){
    var min = Math.ceil(0);
    var max = Math.floor(quotesObject.length);
    var randomQuoteIndex = Math.floor(Math.random() * (max - min)) + min;
    return quotesObject[randomQuoteIndex];
  },

  render: function(){
    return(
      <div className="center small-6 button-group">
      <button className = "hollow button" onClick ={this.handleNewQuote}><i className ="fa fa-random fa-2x"></i></button>
      <button className = "alert button"><i className = "fa fa-twitter fa-2x"></i></button>
      </div>
    );
  }
});

module.exports = QuoteButtons;
