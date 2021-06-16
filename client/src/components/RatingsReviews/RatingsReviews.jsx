import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Requests from '../../../../lib/RatingsReviews.js';

import StarRating from '../sharedComponents/StarRating.jsx';
import StarRatingBars from './StarRatingBars.jsx';
import Characteristics from './Characteristics.jsx';

import Review from './Review.jsx';
import AddReviewForm from './AddReviewForm.jsx';

import data from '../../../../dummy_data/ratings.js';

import './styles/ratingsReviews.css';

const RatingsReviews = ({ productId }) => {
  const [ratings, setRatings] = useState(data);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [shownReview, setShownReview] = useState(2);

  const [recommended, setRecommended] = useState(0);
  const [rating, setRating] = useState({});
  const [characteristics, setCharacteristics] = useState({});

  const [showMoreButton, setShowMoreButton] = useState(true);
  const [showCreateReviewForm, setShowCreateReviewForm] = useState(false);

  const [currentSortingOption, setCurrentSortingOption] = useState('relevant');

  const [avarageRating, setAvarageRating] = useState(0);

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

  useEffect(() => {
    Requests.getReviewMetadata(productId)
      .then(({ data }) => {
        setRecommended(data.recommended.true);
        setRating(data.ratings);
        setCharacteristics(data.characteristics);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [productId]);

  useEffect(() => {
    let avarage = reviews.reduce((acc, val) => {
      return acc + val.rating;
    }, 0);
    avarage = ((avarage / reviews.length)).toFixed(0);
    // avarage = (avarage / reviews.length).toFixed(2);
    if (Number(avarage)) {
      setAvarageRating(Number(avarage));
    }
  }, [reviews]);

  const giveMoreReviews = () => {
    setShownReview( shownReview + 2 );
  };

  return (
    <div className = 'ratingsReviews'>
      <a id='route'></a>
      <h1>RatingsReviews</h1>
      <div className='ratingsReviewsContainer'>
        {/* Ratings */}
        <div className='ratings'>
          <h1>Ratings</h1>
          <div>Number Rating
            <StarRating numberOfStars = {avarageRating} />
          </div>

          <div>
            <StarRatingBars
              reviews = {reviews}
              recommend = {recommended}
              rating = {rating}
            />
          </div>

          <div>
            <Characteristics characteristics = {characteristics} />
          </div>
        </div>

        {/* Reviews */}
        <div className='reviews'>
          <h1>Reviews</h1>
          <div className = 'upperBlock'>
            {`${reviews.length} reviews, sorted by `}
            <select onChange = { (e) => { setCurrentSortingOption(e.target.value); } }>
              <option value='relevance'>Relevance</option>
              <option value='helpful'>Helpful</option>
              <option value='newest'>Newest</option>
            </select>
          </div>

          <div className = 'reviewsContainer'>
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
              showCreateReviewForm && <AddReviewForm characteristics2 = {characteristics}
                productId = {productId}
              />
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