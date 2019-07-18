import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import api from 'API';

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
        <button onClick={() => {this.handleClick('random')}} className={'button ' + (this.props.active === 'random' ? 'button--active' : '')}>Get random</button>
        <button onClick={() => {this.handleClick('add')}} className={'button' + (this.props.active === 'add' ? 'button--active' : '')}>Add Quote</button>
        <button onClick={() => {this.handleClick('all')}} className={'button' + (this.props.active === 'all' ? 'button--active' : '')}>View All</button>
      </div>
    );
  }
}

module.exports = ToggleButtons;