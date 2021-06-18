import React from 'react';

//
import StarRating from '../../sharedComponents/StarRating.jsx';
import StarRatingBars from './StarRatingBars.jsx';
import Characteristics from './Characteristics.jsx';

import './styles/ratings.css';

const Ratings = ({
  avarageRating,
  recommended,
  characteristics,
  rating,
  reviewsLen
}) => {
  return (
    <div className='ratings'>
      <h1>Ratings</h1>
      <div><p>Rating: {avarageRating}</p>
        <StarRating
          numberOfStars = {avarageRating}
        />
      </div>

      <div>
        <StarRatingBars
          recommend = {recommended}
          rating = {rating}
          reviewsLen = {reviewsLen}
        />
      </div>

      <div>
        <Characteristics
          characteristics = {characteristics}
        />
      </div>
    </div>
  );
};

export default Ratings;