const React = require('react');
const QuoteDisplay = require('QuoteDisplay');
const QuoteButtons = require('QuoteButtons');
const ToggleButtons = require('ToggleButtons');
const AllQuotes = require('AllQuotes');
const AddQuoteForm= require('AddQuoteForm');
const Flash = require('Flash');


let Quote = React.createClass({
  getDefaultProps: function(){
    return {
    author: 'George Loaiza',
    quote: 'Welcome to my Quote Machine!',
    view: 'random'
    };
  },
  getInitialState: function(){
    return{
      author: this.props.author,
      quote: this.props.quote,
      view: this.props.view
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
  handleToggleClick: function(view) {
    this.setState({view});
  },
  render: function(){
    let author = this.state.author;
    let quote = this.state.quote;
    let view = this.state.view;
    let component = null;
    let toggleBtnTxt = null;

    if (view === 'add') {
      component = <AddQuoteForm/>;
      toggleBtnTxt = 'Show quotes';
    } else if (view === 'random') {
      component = <div> <QuoteButtons onNewData = {this.handleNewData}/><QuoteDisplay author = {author} quote = {quote}/></div> ;
      toggleBtnTxt = 'Add your own';
    } else if (view === 'all') {
      component = <AllQuotes/>;
    }

    // 2 views, either 'form' or 'quote'
    return(
      <div className = "row">
        <h1 className = "center">Motivational Quotes</h1>
        <div>
          <ToggleButtons handleToggleClick={this.handleToggleClick}/>
          {component}
          <button type="button"  className="button button--blue" onClick = {this.toggleView}>{toggleBtnTxt}</button>
        </div>
        <Flash/>
      </div>
    );
  }

});

module.exports = Quote;
