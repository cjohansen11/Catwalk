import React, { useEffect, useState } from 'react';

import CharacteristicsBars from './CharacteristicsBars.jsx';

import Requests from '../../../../lib/RatingsReviews.js';

const Characteristics = ({ productId }) => {
  return (
    <div>
      <CharacteristicsBars data = {10} />
    </div>
  );
};

export default Characteristics;