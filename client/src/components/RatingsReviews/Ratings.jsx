import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Requests from '../../../../lib/RatingsReviews.js';
// import Bar from './Bar.jsx';
import StarRating from './StarRating.jsx';
import StarRatingBars from './StarRatingBars.jsx';
import CharacteristicsBars from './CharacteristicsBars.jsx';

import data from '../../../../dummy_data/ratings.js';

const Ratings = ({ productId }) => {
  const [ratings, setRatings] = useState(data);

  // Uncomment closer to production
  // useEffect(() => {
  //   Requests.getReviewMetadata(productId)
  //     .then(({data}) => {
  //       setRatings(data.results);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, [productId]);

  return (
    <div className='ratingsContainer'>
      <h1>Ratings</h1>
      <div>Number&Rating
        <StarRating numberOfStars={4} />
      </div>

      <div>
        <StarRatingBars />
      </div>

      <div>
        <CharacteristicsBars />
      </div>
    </div>
  );
};

Ratings.propTypes = {
  productId: PropTypes.number.isRequired
};

export default Ratings;