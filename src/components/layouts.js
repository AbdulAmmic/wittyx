import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Column = ({ children, padding, margin, borderRadius, backgroundColor, color, display }) => {
  const columnStyle = {
    padding,
    margin,
    borderRadius,
    backgroundColor,
    color,
    display: display,
  };

  return <div className="col" style={columnStyle}>{children}</div>;
};

const Row = ({ children, padding, margin, borderRadius, backgroundColor, color }) => {
  const rowStyle = {
    padding: '10px' || padding,
    margin: '10px' || margin,
    borderRadius,
    backgroundColor,
    color,
  };

  return <div className="row" style={rowStyle}>{children}</div>;
};

const Container = ({ children, padding, margin, borderRadius, backgroundColor, color }) => {
  const containerStyle = {
    padding,
    margin,
    borderRadius,
    backgroundColor,
    color,
  };

  return <div className="container" style={containerStyle}>{children}</div>;
};

const Card = ({ children, padding, margin, borderRadius, backgroundColor, color }) => {
  const cardStyle = {
    padding,
    margin,
    borderRadius,
    backgroundColor,
    color,
  };

  return <div className="card" style={cardStyle}>{children}</div>;
};

export { Column, Row, Container, Card };
