var React = require('react');

var QuoteDisplay = React.createClass({
  render: function(){
    return(
      <div className = "center quoteContainer callout primary small small-10 medium-6">
        <i className="fa fa-quote-left quoteButton" aria-hidden="true"></i>
        <blockquote>
        <p className = "quote">{this.props.quote}</p>
        <cite>{this.props.author}</cite>
        </blockquote>
      </div>
    )
  }
});

module.exports = QuoteDisplay;
