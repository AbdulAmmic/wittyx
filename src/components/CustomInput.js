import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  margin,
  padding,
  borderRadius,
  backgroundColor,
  color,
}) => {
  const inputStyle = {
    margin,
    padding,
    borderRadius,
    backgroundColor,
    color,
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={inputStyle}
      className="form-control" // Bootstrap class for form control
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  margin: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  margin: '0',
  padding: '8px',
  borderRadius: '4px',
  backgroundColor: '#fff',
  color: '#333',
};

export default Input;
