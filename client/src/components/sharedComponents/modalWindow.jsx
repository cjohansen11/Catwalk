import React from 'react';
import PropTypes from 'prop-types';

import './ModalWindow.css';

const ModalWindow = ({
  shown,
  closeFunc,
  children
}) => {
  const closeMe = () => {
    closeFunc(false);
  };

  return (
    <div className = 'modalWindow'>
      <button onClick = {closeMe} >CloseMe!</button>
      {children}
    </div>
  );
};

ModalWindow.propTypes = {
  shown: PropTypes.bool.isRequired,
  closeFunc: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default ModalWindow;