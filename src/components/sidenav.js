
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import '../App.css';

const SideNav = ({ items, onItemClick, width, backgroundColor, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  const sideNavStyle = {
    width: isOpen ? width : '0',
    backgroundColor,
    color,
  };

  const contentStyle = {
    marginLeft: isOpen ? width : '0',
    transition: 'margin-left 0.5s',
  };

  return (
    <div>
      <div className={`sidenav-icon ${isOpen ? 'active' : ''}`} onClick={toggleSideNav}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className="sidenav" style={sideNavStyle}>
        {items.map((item, index) => (
          <div key={index} className="sidenav-item" onClick={() => onItemClick(item)}>
            {item}
          </div>
        ))}
      </div>
      <div className="content" style={contentStyle}>
       
      </div>
    </div>
  );
};



export default SideNav;
