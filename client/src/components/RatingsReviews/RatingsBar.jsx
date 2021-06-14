import React, { useState, useEffect } from 'react';

const RatingsBar = ({ rating, value }) => {
  const barContainer = {
    width: '100%',
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
    color: 'white'
  };

  /* Individual bars */
  const bar = {
    width: `${Number(rating) ? rating : 0 }%`,
    height: '5px',
    backgroundColor: 'grey'
  };

  return (
    <div
      style = {barContainer}
    >
      <div
        style = {bar}
      >
        <span></span>
      </div>
    </div>
  );
};

export default RatingsBar;