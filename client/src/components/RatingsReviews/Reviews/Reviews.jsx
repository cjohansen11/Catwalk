import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StarRating from '../../sharedComponents/StarRating.jsx';
import ModalWindow from '../../sharedComponents/ModalWindow.jsx';

import Review from './Review.jsx';
import AddReviewForm from './AddReviewForm.jsx';

import './styles/reviews.css';

const Reviews = ({
  productId,
  reviews,
  currentSortingOption,
  setCurrentSortingOption,
  characteristics
}) => {
  const [showMoreButton, setShowMoreButton] = useState(true);
  const [showCreateReviewForm, setShowCreateReviewForm] = useState(false);

  const [shownReview, setShownReview] = useState(2);

  const changeSortingOption = (e)=> {
    setCurrentSortingOption(e.target.value);
  };

  const giveMoreReviews = () => {
    setShownReview( shownReview + 2 );
  };

  return (
    <div className='reviews'>
      <h1>Reviews</h1>
      <div className = 'upperBlock'>

        {`${reviews.length} reviews, sorted by `}
        <select
          onChange = { changeSortingOption }
          value = { currentSortingOption }
        >
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
          (shownReview < reviews.length) && <button className = 'buttonMarko' onClick = { giveMoreReviews } >More Reviews</button>
        }
        <button
          className = 'buttonMarko'
          onClick = { () => { setShowCreateReviewForm(!showCreateReviewForm); }
          }>Add Review</button>
        {
          showCreateReviewForm && <ModalWindow
            shown= { showCreateReviewForm }
            closeFunc = {setShowCreateReviewForm}>
            <AddReviewForm
              characteristics2 = {characteristics}
              productId = {productId}
            /></ModalWindow>
        }

      </div>
    </div>
  );
};

Reviews.propTypes = {
  productId: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
  currentSortingOption: PropTypes.string.isRequired,
  setCurrentSortingOption: PropTypes.func.isRequired,
  characteristics: PropTypes.object.isRequired
};

export default Reviews;