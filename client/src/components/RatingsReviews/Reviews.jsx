import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Requests from '../../../../lib/RatingsReviews.js';

import Review from './Review.jsx';
import AddReviewForm from './AddReviewForm.jsx';

import data from '../../../../dummy_data/data.js';

const Reviews = ({ productId }) => {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [shownReview, setShownReview] = useState(2);

  const [showMoreButton, setShowMoreButton] = useState(true);
  const [showCreateReviewForm, setShowCreateReviewForm] = useState(false);

  const [currentSortingOption, setCurrentSortingOption] = useState('relevant');


  useEffect(() => {
    Requests.getReviews(productId, currentSortingOption) // 19653
      .then((data) => {
        setReviews(data.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [productId]);

  useEffect(() => {
    setLoading(true);
    Requests.getReviews(productId, currentSortingOption)
      .then((data) => {
        setReviews(data.data.results);
        setLoading(false);
      });
  }, [currentSortingOption]);

  const giveMoreReviews = () => {
    setShownReview( shownReview + 2 );
  };

  return (
    <div className='reviewsContainer'>
      <h1>Reviews</h1>
      <div>
        {`${reviews.length} reviews, sorted by `}
        <select onChange = { (e) => { setCurrentSortingOption(e.target.value); } }>
          <option value='relevance'>Relevance</option>
          <option value='helpful'>Helpful</option>
          <option value='newest'>Newest</option>
        </select>
      </div>

      <div>
        {
          _.map(
            _.slice(reviews, 0, shownReview),
            (review) => {
              return (
                <Review
                  key = { review.review_id }
                  review = { review }
                />
              );
            })
        }
      </div>

      <div>
        {
          (shownReview < reviews.length) && <button onClick = { giveMoreReviews } >More Reviews</button>
        }
        <button onClick = { () => { setShowCreateReviewForm(!showCreateReviewForm); } }>Add Review</button>
        {
          showCreateReviewForm && <AddReviewForm />
        }

      </div>

    </div>
  );
};

Reviews.propTypes = {
  productId: PropTypes.number.isRequired
};

export default Reviews;