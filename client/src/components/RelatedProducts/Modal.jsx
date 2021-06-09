import React from 'react';

import '../../styles/modal.css';

const Modal = ({ setToggleModal }) => {
  return (
    <div className={`${'modal'}`} onClick={() => setToggleModal(false)}>
      <button className={'button'} onClick={() => setToggleModal(false)}>Close</button>
      <div className={`${'feature-table'}`}>This is a modal</div>
    </div>
  );
};

export default Modal;