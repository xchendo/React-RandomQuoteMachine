var React = require('react');

var QuoteButtons = React.createClass({
  render: function(){
    return(
      <div>
      <button>New Quote</button>
      <button>Tweet this quote!</button>
      </div>
    );
  }
});

module.exports = QuoteButtons;
