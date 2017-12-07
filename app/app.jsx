var React = require('react');
var ReactDOM = require('react-dom');
import Quote from 'Quote';

// Load bootstrap
//require('style!css!foundation-sites/dist/foundation.min.css')
//$(document).foundation();

//Load css
require('!style!css!sass!applicationStyles')

ReactDOM.render(
  <Quote/>,
    document.getElementById('app')
);
