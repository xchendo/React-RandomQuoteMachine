import React from 'react';
import ReactDOM from 'react-dom';
import api from 'API';
import Pagination from 'Pagination';

class AllQuotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      page: 1
    };

    // binding the functions
    this.createQuoteList = this.createQuoteList.bind(this);
    //this.handlePage = this.handlePage.bind(this);
  }

  // hit the all quotes endpoint, and update the state with the data
  componentDidMount() {
    console.log("mounting");
    api.getAllQuotes(this.state.page).then((resp) => {
      console.log(resp);
      this.setState({
        loading: false,
        data: resp.data,
      });
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update");
    return true;
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

  handlePage(page) {
    return this.setState({
      page: page
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page != this.state.page) {
      api.getAllQuotes(this.state.page).then((resp) => {
        console.log(resp);
        this.setState({
          loading: false,
          data: resp.data,
        });
      })
    }
    console.log("did update");
  }

  render() {
    let loading = this.state.loading;
    let quotes = this.state.data;
    let component = <div> Error fetching all quotes!</div>;
    let page = this.state.page;
    console.log("render");

    if (loading) {
      component = <div>Loading..</div>;
    } else if (!loading && quotes) {
      component = <div>{this.createQuoteList()}</div>;
    }

    return (
      <div>
        <Pagination page={page} getPage={this.handlePage.bind(this)}/>
        {component}
      </div>
    )
  }
}

module.exports = AllQuotes;