import React from 'react';
import PropTypes from 'prop-types';

/**
 * Contains Prev/Next button, page number w/ count (Page {x} of {total}) - {count} total results
 * On each prev/next press, update the state's page number and on componentDidMount make the request
 * for that page, our api will handle the actual pagination
 */
const defaultProps = {
  page: 1,
  pages: null,
  count: null,
};

const Pagination = (props) => {
  const {
    page,
    pages,
    count,
  } = props;

  let backBtn = null;
  let forwardBtn = null;

  if (page > 1) {
    backBtn =
      (
        <button className="pagination__prev" onClick={() => { props.getPage(page - 1); }}>
          Prev
        </button>
      );
  }

  if (page < pages) {
    forwardBtn =
    (
      <button className="pagination__next" onClick={() => { props.getPage(page + 1); }}>
        Next
      </button>
    );
  }
  return (
    <div className="pagination">
      {backBtn}
      <span className="pagination__current_page">
        Page {page} of {pages} - {count} total results
      </span>
      {forwardBtn}
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  pages: PropTypes.number,
  count: PropTypes.number,
  getPage: PropTypes.func.isRequired,

};

Pagination.defaultProps = defaultProps;

module.exports = Pagination;
