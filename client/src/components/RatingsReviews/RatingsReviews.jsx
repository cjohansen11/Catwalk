import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Requests from '../../../../lib/RatingsReviews.js';

import StarRating from '../sharedComponents/StarRating.jsx';
import StarRatingBars from './StarRatingBars.jsx';
import CharacteristicsBars from './CharacteristicsBars.jsx';

import Review from './Review.jsx';
import AddReviewForm from './AddReviewForm.jsx';

import data from '../../../../dummy_data/ratings.js';

import '../../styles/ratingsReviews.css';

const RatingsReviews = ({ productId }) => {

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

  // Reviews Section

  const [ratings, setRatings] = useState(data);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [shownReview, setShownReview] = useState(2);

  const [showMoreButton, setShowMoreButton] = useState(true);
  const [showCreateReviewForm, setShowCreateReviewForm] = useState(false);

  const [currentSortingOption, setCurrentSortingOption] = useState('relevant');

  useEffect(() => {
    Requests.getReviews(productId, currentSortingOption)
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
    <div className = 'ratingsReviews'>
      <h1>RatingsReviews</h1>
      <div className='ratingsReviewsContainer'>
        {/* Ratings */}
        <div className='ratingsContainer'>
          <h1>Ratings</h1>
          <div>Number Rating
            <StarRating numberOfStars={4} />
          </div>

          <div>
            <StarRatingBars />
          </div>

          <div>
            <CharacteristicsBars />
          </div>
        </div>

        {/* Reviews */}
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
      </div>
    </div>
  );
};

RatingsReviews.propTypes = {
  productId: PropTypes.number.isRequired
};

export default RatingsReviews;