import React, { useState } from 'react';

const WithTracker = Component => {

  const ComponentWithTracker = ({ setTracker, featuredProduct, setFeaturedProduct, componentName }) => {

    /* ** ADDITIONAL FUNCTION(s) ** */
    const clickTracker = (e) => {
      let trackerObject = {
        'element': e.target,
        'timeClicked': new Date(),
        'module': componentName
      };
      setTracker(prev => [...prev, trackerObject]);
    };

    return (
      <div onClick={(e) => clickTracker(e)}>
        <Component featuredProduct={featuredProduct} setFeaturedProduct={setFeaturedProduct} clickTracker={clickTracker} />
      </div>
    );
  };

  return ComponentWithTracker;
};

export default WithTracker;