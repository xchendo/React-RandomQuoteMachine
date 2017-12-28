import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import api from 'API';

// React stateless functional component
function ToggleButton(props) {
  return (
    <div> 
      <button onClick={() => {console.log(props.text)}} className='button button--third'>
        {props.text}
      </button>
    </div>
  );
}

ToggleButton.propTypes = {
  text: PropTypes.string
}

class ToggleButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // we will pass the value of the clicked button up and set it as the view state
  handleClick(view) {
    this.props.handleToggleClick(view);
  }

  render() {
    return (
      <div className="toggleButtons">
        <button onClick={() => {this.handleClick('random')}} className='button button--third'>Get random</button>
        <button onClick={() => {this.handleClick('add')}} className='button button--third'>Add Quote</button>
        <button onClick={() => {this.handleClick('all')}} className='button button--third'>View All</button>
      </div>
    );
  }
}

module.exports = ToggleButtons;