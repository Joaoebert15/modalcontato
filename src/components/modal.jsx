import React, { useState } from "react";

function Modal(props) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <button onClick={openModal}>Contato</button>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal} className="close">Fechar X</button>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
