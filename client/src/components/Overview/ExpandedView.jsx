import React from 'react';

import '../../styles/imageGallery.css';

const ExpandedView = (props) => {
  return (
    <div className={`${'expanded'}`} onClick={() => props.setToggle(event, false)}>
      <img className='expandedphoto' src={props.photoUrl} />
    </div>
  );
};

export default ExpandedView;