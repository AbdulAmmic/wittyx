import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheckCircle, BsExclamationTriangle, BsFillXCircleFill } from 'react-icons/bs';

const Alert = ({ type, message, disappear }) => {
  const [visible, setVisible] = useState(true);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <BsCheckCircle color="green" />;
      case 'warning':
        return <BsExclamationTriangle color="orange" />;
      case 'danger':
        return <BsFillXCircleFill color="red" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    let timeout;

    if (disappear) {
      timeout = setTimeout(() => {
        setVisible(false);
      }, 2000); // Set the duration (2 seconds in this case)
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [disappear]);

  return (
    <>
      {visible && (
        <div className={`alert alert-${type}`} role="alert">
          {getIcon()} {/* Display the corresponding icon */}
          <span className="ml-2">{message}</span>
        </div>
      )}
    </>
  );
};

export default Alert;
