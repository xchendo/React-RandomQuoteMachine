import React from 'react';
import api from 'API';
import Pagination from 'Pagination';

class AllQuotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      page: 1,
      count: 0,
      pages: 0
    };

    // binding the functions
    this.createQuoteList = this.createQuoteList.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }

  // hit the all quotes endpoint, and update the state with the data
  componentDidMount() {
    api.getAllQuotes(this.state.page).then((resp) => {
      this.setState({
        loading: false,
        data: resp.data.quotes,
        pages: resp.data.pages,
        count: resp.data.count,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      api.getAllQuotes(this.state.page).then((resp) => {
        this.setState({
          loading: false,
          data: resp.data.quotes,
          pages: resp.data.pages,
          count: resp.data.count,
        });
      });
    }
  }

  onChangePage(page) {
    this.setState({
      page,
    });
  }

  createQuoteList() {
    const quotes = this.state.data;
    return quotes.map((quote, i) => {
      return (
        <div className="quote-content" key={i}>
          <div className="quote__text">
            {quote.text}
          </div>
          <div className="quote__author">
            ~ {quote.author}
          </div>
          
          
        </div>
      );
    });
  }

  render() {
    const page = this.state.page;
    const loading = this.state.loading;
    const pages = this.state.pages;
    const count = this.state.count;
    const quotes = this.state.data;
    let component = <div> Error fetching all quotes!</div>;


    if (loading) {
      component = <div>Loading..</div>;
    } else if (!loading && quotes) {
      component = <div className="all-quotes">{this.createQuoteList()}</div>;
    }

    return (
      <div>
        <Pagination page={page} count={count} pages={pages} onChangePage={this.onChangePage} />
        {component}
      </div>
    );
  }
}

module.exports = AllQuotes;
