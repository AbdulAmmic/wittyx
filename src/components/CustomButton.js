import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default function Button ({
  type,
  onClick,
  text,
  margin,
  padding,
  borderRadius,
  variant,
  isLoading,
}) {
  const buttonStyle = {
    margin,
    padding,
    borderRadius,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={buttonStyle}
      className={`btn btn-${variant} custom-button`}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : text}
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
  variant: PropTypes.string, // Bootstrap button variant (e.g., 'primary', 'secondary', 'success', etc.)
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  margin: '0',
  padding: '8px 16px',
  borderRadius: '4px',
  variant: 'primary', // Default Bootstrap variant
  isLoading: false,
};


