import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ModalWindow from '../../sharedComponents/ModalWindow.jsx';

import './styles/modalPhoto.css';

const ModalPhotoWindow = ({ photoURL }) => {
  const [showModalPhotoWindow, setShowModalPhotoWindow] = useState(false);

  return (
    <div>
      {
        showModalPhotoWindow && <ModalWindow
          shown = {showModalPhotoWindow}
          closeFunc = {setShowModalPhotoWindow}
        >
          <img
            className='modalPhoto'
            src = { photoURL }
            alt = { photoURL }
          />
        </ModalWindow>
      }
      <img
        className = "photoThumbsnail image"
        src = { photoURL }
        onClick = {
          () => {
            setShowModalPhotoWindow(true);
          }
        }
      />
    </div>
  );
};

ModalPhotoWindow.propTypes = {
  photoURL: PropTypes.string.isRequired
};

export default ModalPhotoWindow;