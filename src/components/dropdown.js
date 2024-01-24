import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dropdown = ({ title, options, onSelect, className, variant }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect && onSelect(option);
  };

  return (
    <div className="dropdown">
      <button
        className={`btn btn-${variant} dropdown-toggle`}
        type="button"

        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : title}
      </button>
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
        {options.map((option) => (
          <button
            key={option.value}
            className={`dropdown-item ${selectedOption && selectedOption.value === option.value ? 'active' : ''}`}
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
