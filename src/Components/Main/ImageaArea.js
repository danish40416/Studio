import React from 'react';

export default function ImageaArea({ onOpenModal }) {
  return (
    <div>
      <div className="add-image-btn">
        <div className="small-box" id="box1"></div>
        <div className="small-box" id="box2"></div>
        <div className="small-box" id="box3"></div>
        <button className="image-btn" id="openModalBtn" onClick={onOpenModal}>+</button>
      </div>
      <div className="zoom-control">
        <input className="input-range" type="range" min="0" max="100" />
      </div>
      <div className="d-flex justify-content-center">
        <p className="canvas text-center position-absolute">Click + in the top right to get started!. <br />
          <span>or<b>Drag and Drop</b> or <b>Copy and Paste</b> an image.</span>
        </p>
      </div>
    </div>
  );
}
