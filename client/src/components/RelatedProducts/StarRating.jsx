import React from 'react';

import CardStyles from '../../styles/productCard.css';
import StarStyles from '../../styles/starRating.css';

const StarRating = () => {
  return (
    <div className={`${CardStyles.productRating} ${StarStyles.Star}`} >
      {/* <div><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div> */}
    </div>
  );
};

export default StarRating;