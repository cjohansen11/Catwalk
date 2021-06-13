import React, { useState } from 'react';

const WithTracker = Component => {

  const ComponentWithTracker = ({ userData, componentName }) => {

    const [tracker, setTracker] = useState([]);

    /* ** ADDITIONAL FUNCTION(s) ** */
    const clickTracker = (e) => {
      let trackerObject = {
        'element': e.target,
        'timeClicked': new Date(),
        'module': componentName
      };
      // setTracker(prev => [...prev, trackerObject]);
      userData.push(trackerObject);
    };

    return (
      <div onClick={(e) => {
        clickTracker(e);
      }}>
        <Component/>
      </div>
    );
  };

  return ComponentWithTracker;
};

export default WithTracker;