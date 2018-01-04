import React from 'react';

function QuoteDisplay(props) {
  return(
    <div className = "center quoteContainer callout primary small small-10 medium-6">
      <i className="fa fa-quote-left quote--icon" aria-hidden="true"></i>
      <blockquote>
      <p className = "quote">{props.quote}</p>
      <cite>{props.author}</cite>
      </blockquote>
    </div>
  )
}

module.exports = QuoteDisplay;
