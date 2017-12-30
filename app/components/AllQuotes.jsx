import React from 'react';
import ReactDOM from 'react-dom';
import api from 'API';

function quote (props) {
  return (
    <div className="list__quote">
      <div className="list__quote__author">props.author</div>
      <div className="list__quote__text">props.text</div>
    </div>
  );
}

class AllQuotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null
    };

    // binding the functions
    this.createQuoteList = this.createQuoteList.bind(this);
  }

  // hit the all quotes endpoint, and update the state with the data
  componentDidMount() {
    api.getAllQuotes().then((resp) =>{
      this.setState({
        loading: false,
        data: resp.data
      });
    })
  }
  
  createQuoteList() {
    let quotes = this.state.data;
    return quotes.map((quote, i) => {
      return (
      <div key={i}>
        <div>
        {quote.author}
      </div>
      <div>
        {quote.text}
      </div>
      </div>
      );
    })
  }

  render() {
    let loading = this.state.loading;
    let quotes = this.state.data;

    if (loading) {
      return (
        <div>Loading..</div>
      )
    } else if (!loading && quotes) {
      return (
       <div>
         {this.createQuoteList()}
       </div>
      );
    } else {
      return (
        <div> Error fetching all quotes!</div>
      )
    }
  }
}

module.exports = AllQuotes;