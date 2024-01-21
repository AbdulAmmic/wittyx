
import React from 'react';
import '../App.css';

const Starter = ({ children }) => {
  return (
    <div className="start-screen-container">
      <div className="start-screen-content">
        <h2>Welcome to Your React Starter App</h2>
        {children}
      </div>
    </div>
  );
};

export default Starter;
