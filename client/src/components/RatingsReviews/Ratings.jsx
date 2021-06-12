import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Requests from '../../../../lib/RatingsReviews.js';
// import Bar from './Bar.jsx';
// import Characteristics from './Characteristics.jsx';

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
      {/* <Bar data = {data}/>
      <Characteristics data={data} /> */}
    </div>
  );
};

Ratings.propTypes = {
  productId: PropTypes.number.isRequired
};

export default Ratings;