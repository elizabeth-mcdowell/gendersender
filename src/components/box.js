// src/Box.js
import React from 'react';
import './box.css'; // Import the CSS file

const Box = (props) => {
  return (
    <div className="box">
      {props.text} {/* Display the text passed as a prop */}
    </div>
  );
};

export default Box;
