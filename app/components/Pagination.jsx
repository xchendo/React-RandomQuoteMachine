import React from 'react';

/**
 * Contains Prev/Next button, page number w/ count (Page {x} of {total}) - {count} total results
 * On each prev/next press, update the state's page number and on componentDidMount make the request
 * for that page, our api will handle the actual pagination
 */
const Pagination = (props) => {
  let page = props.page;
  let pages = props.pages;
  let count = props.count;
  console.log(props);
  return (
    <div className='pagination'>
      <button className="pagination__prev" onClick={() => { props.getPage(page-1) }}>Prev</button>
      <span className='pagination__current_page'> Page {page} of {pages} - total results </span>
      <button className="pagination__next" onClick={() => { props.getPage(page+1) }}>Next</button>
    </div>
  )
}

module.exports = Pagination;