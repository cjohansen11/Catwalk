import React from 'react';
import PropTypes from 'prop-types';

import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

import '../../styles/ratingsReviews.css';

const RatingsReviews = ({ productId }) => {
  return (
    <div>
      <h1>RatingsReviews</h1>
      <div className='ratingsReviewsContainer'>
        <Ratings productId = {productId} />
        <Reviews productId = {productId} />
      </div>
    </div>
  );
};

RatingsReviews.propTypes = {
  productId: PropTypes.number.isRequired
};

export default RatingsReviews;