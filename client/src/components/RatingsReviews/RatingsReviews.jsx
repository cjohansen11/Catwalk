import React from 'react';
import PropTypes from 'prop-types';

import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

import '../../styles/ratingsReviews.css';

const RatingsReviews = ({ productId, reviews }) => {
  return (
    <div>
      <a id='route'></a>
      <h1>RatingsReviews</h1>
      <div className='ratingsReviewsContainer'>
        <Ratings productId={productId} />
        <Reviews productId={productId} reviews={reviews} />
      </div>
    </div>
  );
};

RatingsReviews.propTypes = {
  productId: PropTypes.number.isRequired
};

export default RatingsReviews;