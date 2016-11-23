var React = require('react');
var QuoteDisplay = require('public/components/QuoteDisplay.jsx');
var QuoteButtons = require('public/components/QuoteButtons.jsx');

var Quote = React.createClass({
  getDefaultProps: function(){
    return {
    name: 'George Loaiza',
    quote: 'Welcome to my Quote Machine!'
    };
  },
  render: function(){
    var name;
    var quote;
    return(
      <div>
        <h1>Random Quote Machine</h1>
        <QuoteDisplay name = {this.props.name} quote = {this.props.quote}/>
        <QuoteButtons/>
      </div>
    );
  }

});

module.exports = Quote;
