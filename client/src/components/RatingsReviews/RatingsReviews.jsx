import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Requests from '../../../../lib/RatingsReviews.js';

import Ratings from './Ratings/Ratings.jsx';
import Reviews from './Reviews/Reviews.jsx';

import data from '../../../../dummy_data/ratings.js';

import './styles/ratingsReviews.css';

const RatingsReviews = ({ productId }) => {
  const [ratings, setRatings] = useState(data);

  const [recommended, setRecommended] = useState(0);
  const [rating, setRating] = useState({});
  const [characteristics, setCharacteristics] = useState({});
  const [avarageRating, setAvarageRating] = useState(0);

  const [reviews, setReviews] = useState([]);
  const [currentSortingOption, setCurrentSortingOption] = useState('relevant');
  //
  useEffect(() => {
    Requests.getReviews(productId, currentSortingOption)
      .then((data) => {
        console.log(data.data.results);
        setReviews(data.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [productId]);

  useEffect(() => {
    Requests.getReviews(productId, currentSortingOption)
      .then((data) => {
        setReviews(data.data.results);
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
    avarage = ((avarage / reviews.length)).toFixed(2);
    // avarage = (avarage / reviews.length).toFixed(2);
    if (Number(avarage)) {
      setAvarageRating(Number(avarage));
    }
  }, [reviews]);

  console.log(avarageRating);
  return (
    <div className = 'ratingsReviews'>
      <a id='route'></a>
      <h1>RatingsReviews</h1>
      <div className='ratingsReviewsContainer'>
        {/* Ratings */}
        <Ratings
          avarageRating = {avarageRating}
          recommended = {recommended}
          characteristics = {characteristics}
          rating = {rating}
          reviewsLen = {reviews.length}
        />

        {/* Reviews */}
        <Reviews
          productId = { productId }
          reviews = { reviews }
          currentSortingOption = { currentSortingOption }
          setCurrentSortingOption = { setCurrentSortingOption }
          characteristics = { characteristics }
        />
      </div>
    </div>
  );
};

RatingsReviews.propTypes = {
  productId: PropTypes.number.isRequired
};

export default RatingsReviews;