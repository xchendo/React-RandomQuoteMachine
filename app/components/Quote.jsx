import React from 'react';
import QuoteDisplay from 'QuoteDisplay';
import ToggleButtons from 'ToggleButtons';
import AllQuotes from 'AllQuotes';
import AddQuoteForm from 'AddQuoteForm';
import Flash from 'Flash';
import api from 'API';


class Quote extends React.Component {
  constructor (props) {
    super(props);

    // set default state
    this.state = {
      author: 'George Loaiza',
      quote: 'Welcome to my Quote Machine!',
      view: 'random'
    }

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleNewData (chosenQuote){
    this.setState({
      author: chosenQuote.author,
      quote: chosenQuote.text
    });
  }

  toggleView (show) {
    this.setState({showForm: !this.state.showForm});
  }

  handleToggleClick (view) {
    if (view === 'random') {

      // get a new quote and update the state
      api.getRandomQuote().then(resp => {
        this.setState({
          view,
          author: resp.data.author,
          quote: resp.data.text
        });
      });
    } else {
      this.setState({view});
    }
  }
  
  render() {
    let author = this.state.author;
    let quote = this.state.quote;
    let view = this.state.view;
    let shownComponent = null;
    let toggleBtnTxt = null;

    // 3 views, add, all and random
    if (view === 'add') {
      shownComponent = <AddQuoteForm/>;
      toggleBtnTxt = 'Show quotes';
    } else if (view === 'random') {
      shownComponent = <QuoteDisplay author = {author} quote = {quote}/>;
      toggleBtnTxt = 'Add your own';
    } else if (view === 'all') {
      shownComponent = <AllQuotes/>;
    }

    return(
      <div className = "quote-machine">
        <h1 className = "center">Stranger Quotes</h1>
        
          <ToggleButtons active={view} handleToggleClick={this.handleToggleClick}/>
          {shownComponent}
        
        <Flash/>
      </div>
    );
  }

};

module.exports = Quote;
