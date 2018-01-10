import React from 'react';
import ReactDOM from 'react-dom';


const Flash = (props) => {
  return (
    <div className="messageContainer">
      <h2 className="messageContainer__status"></h2>
      <p className="messageContainer__text"></p>
    </div>
  )
} 

module.exports = Flash;