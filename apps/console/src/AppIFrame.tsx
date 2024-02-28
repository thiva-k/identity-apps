import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, url }) => {
  const modalContentStyle = {
    width: '80%', // Adjust the width as needed
    height: '80%', // Adjust the height as needed
    margin: 'auto', // Center the modal content horizontally
    marginTop: '50px' // Adjust the top margin as needed
  };

  return (
    isOpen && (
      <div className="modal-overlay" style={{ display: isOpen ? 'block' : 'none' }}>
        <div className="modal-content" style={modalContentStyle}>
          <button className="close-button" onClick={onClose}>Close</button>
          <iframe src={url} title="External Website" style={{ width: '100%', height: '100%' }}  />
        </div>
      </div>
    )
  );
};

const PopupOpener = () => {
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [modal1Url, setModal1Url] = useState(`${window['AppUtils'].getConfig().clientOriginWithTenant}/console/applications`);
  const [modal2Url, setModal2Url] = useState(`${window['AppUtils'].getConfig().clientOriginWithTenant}/console/connections`);

  const openModal1 = () => {
    setIsOpenModal1(true);
  };

  const openModal2 = () => {
    setIsOpenModal2(true);
  };

  const closeModal1 = () => {
    setIsOpenModal1(false);
  };

  const closeModal2 = () => {
    setIsOpenModal2(false);
  };

  return (
    <div>
      <button onClick={openModal1}>Open Applications</button>
      <button onClick={openModal2}>Open Connections</button>
      <Modal isOpen={isOpenModal1} onClose={closeModal1} url={modal1Url} />
      <Modal isOpen={isOpenModal2} onClose={closeModal2} url={modal2Url} />
    </div>
  );
};

export default PopupOpener;
