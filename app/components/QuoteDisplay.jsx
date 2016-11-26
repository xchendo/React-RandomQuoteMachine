var React = require('react');

var QuoteDisplay = React.createClass({
  render: function(){
    return(
      <div>
        <h2>"{this.props.quote}"</h2>
        <h3>- {this.props.author}</h3>
      </div>
    )
  }
});

module.exports = QuoteDisplay;
