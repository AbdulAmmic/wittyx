// SidebarX.js
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaHome, FaInfo, FaCogs, FaBuilding } from 'react-icons/fa'; // Adjust with your desired icons
import '../App.css';

const SidebarX = ({ items, onItemClick, backgroundColor, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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

    case 'Icon':
        return <FaArrowLeft/>;

        default:
            return null;
   
    }
  };

  const sidebarStyle = {
    width: isOpen ? '250px' : '50px',
    backgroundColor,
    color,
  };

  return (
    <div>
      <div className={`sidebarx-icon ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}>
        {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </div>
      <div className="sidebarx" style={sidebarStyle}>
        {items.map((item, index) => (
          <div key={index} className="sidebarx-item" onClick={() => onItemClick(item)}>
            {isOpen ? (
              <>
                {getIconForItem(item)}
                <span>{item}</span>
              </>
            ) : (
              <>
                {getIconForItem(item)}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarX;
