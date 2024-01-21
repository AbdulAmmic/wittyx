
import React from 'react';
import { FaHome, FaInfo, FaCogs, FaBuilding } from 'react-icons/fa'; 
import '../App.css';

const BottomNav = ({ items, onItemClick, backgroundColor, color }) => {
  return (
    <div className="bottom-nav" style={{ backgroundColor, color }}>
      {items.map((item, index) => (
        <div key={index} className="bottom-nav-item" onClick={() => onItemClick(item)}>
          {getIconForItem(item)}
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

const getIconForItem = (item) => {
  switch (item) {
    case 'Home':
      return <FaHome />;
    case 'About':
      return <FaInfo />;
    case 'Services':
      return <FaCogs />;
    case 'Class':
      return <FaBuilding />;
    default:
      return null;
  }
};

export default BottomNav;
