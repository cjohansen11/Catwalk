import React from 'react';

import CardStyles from '../../styles/productCard.css';
import '../../styles/starRating.css';

const StarRating = () => {
  return (
    <div className={`${'productRating'} ${'Star'}`} >
      <div><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
    </div>
  );
};

export default StarRating;