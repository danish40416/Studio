import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ImageaArea from './ImageaArea';
import Modal from '../Modal/Modal';

export default function Main() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {

    setShowModal(true);

  };

  const closeModal = () => {
    setShowModal(false);

  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 main-bar sidebar text-white p-3 h-100vh">
          <Sidebar />
        </div>
        <div className="col main position-relative main-area">
          <ImageaArea onOpenModal={openModal} />
        </div>
        <Modal show={showModal} onClose={closeModal} />
      </div>
    </div>
  );
}
