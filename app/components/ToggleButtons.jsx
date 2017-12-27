import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// React stateless functional component
function ToggleButton(props) {
  return (
    <div> 
      <button className='button button--third'>
        {props.text}
      </button>
    </div>
  );
}

ToggleButton.propTypes = {
  text: PropTypes.string
}

class ToggleButtons extends React.Component {

  render() {
    return (
      <div className="toggleButtons">
        <ToggleButton text='Get random'/>
        <ToggleButton text='Add your own'/>
        <ToggleButton text='See all'/>
      </div>
    );
  }
}

module.exports = ToggleButtons;