import React from 'react';

const ModalWindow = ({ children }) => {
  return (
    <div className = 'modalWindow'>
      {children}
    </div>
  );
};

export default ModalWindow;