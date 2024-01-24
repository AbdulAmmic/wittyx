import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProgressBar = ({ progress, bgcolor, color }) => {
  return (
    <div className="progress mt-3">
      <div  className="progress-bar" role="progressbar" style={{ width: `${progress}%`, backgroundColor: `${bgcolor}`,  Color: `${color}` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
        {`${progress}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
