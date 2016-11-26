var React = require('react');
var QuoteDisplay = require('QuoteDisplay');
var QuoteButtons = require('QuoteButtons');

var Quote = React.createClass({
  getDefaultProps: function(){
    return {
    author: 'George Loaiza',
    quote: 'Welcome to my Quote Machine!'
    };
  },
  getInitialState: function(){
    return{
      author: this.props.author,
      quote: this.props.quote
    };
  },
  handleNewData: function(chosenQuote){
    this.setState({
      author: chosenQuote.author,
      quote: chosenQuote.quote
    });
  },
  render: function(){
    var author = this.state.author;
    var quote = this.state.quote;
    return(
      <div>
        <h1 className = "center">Random Quote Machine</h1>
        <QuoteDisplay author = {author} quote = {quote}/>
        <QuoteButtons onNewData = {this.handleNewData}/>
      </div>
    );
  }

});

module.exports = Quote;
