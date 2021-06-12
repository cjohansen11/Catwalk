import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ModalPhotoWindow = ({ photoURL }) => {
  const [showModalPhotoWindow, setShowModalPhotoWindow] = useState(false);

  const openCloseWindow = () => {
    setShowModalPhotoWindow(!showModalPhotoWindow);
  };

  if (!showModalPhotoWindow) {
    return (
      <div>
        <div>
          <img
            style = {{
              borderRadius: '8px',
              width: '100px',
              height: '100px',
            }}
            src = { photoURL }
            onClick = { openCloseWindow }
          />
        </div>
      </div>
    );
  } else {
    return (
      <img
        style = {{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          maxWidth: '100%',
        }}
        src = { photoURL }
        onClick = { openCloseWindow }
      />
    );
  }
};

ModalPhotoWindow.propTypes = {
  photoURL: PropTypes.string.isRequired
};

export default ModalPhotoWindow;