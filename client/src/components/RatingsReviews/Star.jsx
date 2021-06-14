import React from 'react';

const Star = ({ fill = 'none'}) => {

  if (fill === 'none') {
    return (
      <div>None</div>
    );
  } else {
    return (
      <div>Full</div>
    );
  }
};

export default Star;