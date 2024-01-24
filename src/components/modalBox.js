import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; 

const Modal = ({ show, handleClose, title, children, borderRadius, backgroundColor, variant, animationType }) => {
  const modalStyle = {
    borderRadius,
    backgroundColor,
  };

  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleClose]);

  return (
    <div
      className={`modal ${show ? `show ${animationType}` : ''}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: show ? 'block' : 'none' }}
    >
      <div ref={modalRef} className={`modal-dialog ${variant}`} role="document">
        <div className="modal-content" style={modalStyle}>
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
