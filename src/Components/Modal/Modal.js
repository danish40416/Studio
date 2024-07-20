import React from 'react';

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div>
      <div id="popup" className="popup w-100 h-100 position-fixed">
        <div className="popup-content text-white">
          <span className="close-btn" onClick={onClose}>×</span>
          <div className="title mt-5">
            <h5 className="text-center">danishmehmood40416@gmail.com</h5>
          </div>
          <div className="container px-4 text-center">
            <div className="row py-3">
              <div className="col-md-6 mb-2">
                <div className="p-4 choose-modal">
                  <h2>Choose Model</h2>
                  <p>Custom column padding Custom column padding Custom column padding</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="p-4 choose-modal">
                  <h2>Upload File</h2>
                  <p>Custom column padding Custom column padding Custom column padding</p>
                </div>
              </div>
            </div>
            <h5 className="text-center">This is an enhanced popup message with more content.</h5>
            <div className="row modalButtons d-flex justify-content-center my-4">
              <button className="modal-btn">LAUNCH LOOK PLM</button>
              <button className="modal-btn">WATCH TUTORIALS</button>
            </div>
            <h5>Powered By StyleScan</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
