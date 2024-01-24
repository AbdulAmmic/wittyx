import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Loader;
