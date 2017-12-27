const React = require('react');
const QuoteDisplay = require('QuoteDisplay');
const QuoteButtons = require('QuoteButtons');
const ToggleButtons = require('ToggleButtons');

import AddQuoteForm from 'AddQuoteForm';
import Flash from 'Flash';
import API from 'API';


let Quote = React.createClass({
  getDefaultProps: function(){
    return {
    author: 'George Loaiza',
    quote: 'Welcome to my Quote Machine!',
    showForm: true
    };
  },
  getInitialState: function(){
    return{
      author: this.props.author,
      quote: this.props.quote,
      show: this.props.show
    };
  },
  handleNewData: function(chosenQuote){
    this.setState({
      author: chosenQuote.author,
      quote: chosenQuote.text
    });
  },
  toggleView: function(show) {
    this.setState({showForm: !this.state.showForm});
  },
  render: function(){
    let author = this.state.author;
    let quote = this.state.quote;
    let showForm = this.state.showForm;
    let component = null;
    let toggleBtnTxt = null;

    if (showForm) {
      component = <AddQuoteForm/>;
      toggleBtnTxt = 'Show quotes';
    } else {
      component = <div> <QuoteButtons onNewData = {this.handleNewData}/><QuoteDisplay author = {author} quote = {quote}/></div> ;
      toggleBtnTxt = 'Add your own';
    }

    // 2 views, either 'form' or 'quote'
    return(
      <div className = "row">
        <h1 className = "center">Motivational Quotes</h1>
        <div>
          <ToggleButtons/>
          {component}
          <button type="button"  className="button button--blue" onClick = {this.toggleView}>{toggleBtnTxt}</button>
        </div>
        <Flash/>
      </div>
    );
  }

});

module.exports = Quote;
