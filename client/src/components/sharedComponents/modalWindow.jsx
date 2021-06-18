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
    <div className = 'modal'>
      <div className = 'modalWindow'>
        <span onClick = {closeMe} >&times;</span>
        {children}
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  shown: PropTypes.bool.isRequired,
  closeFunc: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default ModalWindow;