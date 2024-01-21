// Button.js
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Button = ({ type, onClick, text, margin, padding, borderRadius, backgroundColor, color }) => {
  const buttonStyle = {
    margin,
    padding,
    borderRadius,
    backgroundColor,
    color,
  };

  return (
    <button type={type} onClick={onClick} style={buttonStyle} className="custom-button">
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  margin: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  margin: '0',
  padding: '8px 16px',
  borderRadius: '4px',
  backgroundColor: '#007bff',
  color: '#fff',
};

export default Button;
