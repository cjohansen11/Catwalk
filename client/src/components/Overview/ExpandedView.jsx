import React from 'react';
import '../../styles/imageGallery.css';

const ExpandedView = (props) => {

  /* ** COMPONENT VARIABLE(s) ** */

  return (
    <div className={`${'expanded'}`} onClick={(event) => { props.setToggle(event, false); }}>




      <img className='expandedphoto' src={props.photoUrl} />


    </div>
  );
};

export default ExpandedView;