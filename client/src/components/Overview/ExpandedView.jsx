import React from 'react';

import '../../styles/imageGallery.css';

const ExpandedView = (props) => {


  /* ** ADDTIONAL FUNCTIONS ** */
  return (
    <div className={`${'expanded'}`} onClick={() => props.setToggle(event, false)}>


      <img className='expandedphoto' src={props.photoUrl} />


    </div>
  );
};

export default ExpandedView;