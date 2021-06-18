import React, { useEffect, useState } from 'react';

import CharacteristicsBars from './CharacteristicsBars.jsx';

import './styles/CharacteristicsBars.css';

import Requests from '../../../../../lib/RatingsReviews.js';

const Characteristics = ({ productId, characteristics }) => {
  const characteristicData = characteristics ? Object.values(characteristics) : [];

  let valuesArr = [];

  characteristicData.forEach((characteristic) => {
    valuesArr.push(characteristic.value);
  });

  return (
    <div className = 'characteristicsContainer'>
      <br></br>
      <div className='grid'>
        <div>Size</div>
        <CharacteristicsBars data = {valuesArr.length > 0 ? valuesArr[0] : null}/>
        <div className="characteristicsBarContainer">
          <span>Runs Small</span>
          <span style={{
            position: 'relative',
            left: '-9px'
          }}>Just Right</span>
          <span>Runs Big</span>
        </div>
      </div>

      <div>
        <span>Width</span>
        <CharacteristicsBars data={valuesArr.length > 0 ? valuesArr[1] : null}/>
        <div className="characteristicsBarContainer">
          <span>Runs Tight</span>
          <span >Just Right</span>
          <span>Runs Wide</span>
        </div>
      </div>

      <div>
        <span>Comfort</span>
        <CharacteristicsBars data={valuesArr.length > 0 ? valuesArr[2] : null}/>
        <div className="characteristicsBarContainer">
          <span>Uncomfortable</span>
          <span>Almost</span>
          <span>Comfortable</span>
        </div>
      </div>

      <div>
        <span>Quality</span>
        <CharacteristicsBars data={valuesArr.length > 0 ? valuesArr[3] : null}/>
        <div className="characteristicsBarContainer">
          <span>Poor</span>
          <span>Good</span>
          <span style={{
            position: 'relative',
            right: '-40px'
          }}>Perfect</span>
        </div>
      </div>
    </div>
  );
};

export default Characteristics;