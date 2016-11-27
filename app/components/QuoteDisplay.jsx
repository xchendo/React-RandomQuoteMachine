var React = require('react');

var QuoteDisplay = React.createClass({
  render: function(){
    return(
      <div className = "center callout small secondary ">
        <h2 className = "quote">&ldquo;{this.props.quote}&rdquo;</h2>
        <h3>- {this.props.author}</h3>
      </div>
    )
  }
});

module.exports = QuoteDisplay;
