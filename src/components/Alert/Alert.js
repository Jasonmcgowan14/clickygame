import React from 'react';
import './Alert.css';

const Alert = props => (
  <div className='default' style={props.style}>
    {props.message ? (
      <p>{props.message}</p>
    ) : (
      <p className='default-msg black'>
        Jasons Memory Game! How many pictures can you click without reclicking!? What is your strategy??
      </p>
    )}
  </div>
);
export default Alert;