import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    const modalTimeout = setTimeout(() => {
      closeModal();
    }, 3000);
    return () => clearTimeout(modalTimeout);
  });
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
