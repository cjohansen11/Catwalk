import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ModalPhotoWindow from './ModalPhotoWindow.jsx';
import StarRating from '../../sharedComponents/StarRating.jsx';
import ModalWindow from '../../sharedComponents/ModalWindow.jsx';

import Requests from '../../../../../lib/RatingsReviews.js';

import './styles/review.css';

const Review = ({ review }) => {
  const [showMoreText, setShowMoreText] = useState(false);
  const [showMoreTextButton, setShowMoreTextButton] = useState(true);
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);

  const id = review.review_id;
  const date = new Date(review.date).toDateString().split(' ').slice(1).join(', ');
  const name = review.reviewer_name;
  const rating = review.rating || 0;
  const slicedSummary = _.slice(review.summary, 0, 60);
  const restOfSummary = review.summary <= 60 ? null : _.slice(review.summary, 60);
  const body = !showMoreText ? _.slice(review.body, 0, 120) : review.body;
  const showMoreButton = <span className='showmorespan' onClick = { () => {
    setShowMoreText(!showMoreText);
    setShowMoreTextButton(!showMoreTextButton);
  } } >Show more!</span>;

  const helpfulReview = (id) => {
    Requests.updateHelpfulReview(id)
      .then((data) => {
        console.log('It was helpful.');
        setHelpfulness(helpfulness + 1);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const reportReview = (id) => {
    console.log('Report');
    Requests.reportReview(id)
      .then((data) => {
        console.log('Reported');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className = 'review'>
      <div className = 'star row'>
        <StarRating numberOfStars = { rating } />
        <div className = 'nameData'>{name}, {date}</div>
      </div>

      <div className = 'slicedSummary'><b>{slicedSummary}</b></div>

      {restOfSummary.length > 0 && <div className = 'restofsummary'> {'...' + restOfSummary} </div>}

      {review.recommend && <div className = 'recommend'>I recommend this!</div>}

      <div>{body}{review.body.length > 120 && showMoreTextButton && showMoreButton}</div>

      {review.response && <div className = 'response'>{review.response}</div>}

      <div>
        { review.photos &&
          <div className = 'photoThumbsnail'>
            {
              _.map(review.photos, (photo) => {
                return (
                  <ModalPhotoWindow
                    key = { photo.id }
                    photoURL = { photo.url }
                  />
                );
              })
            }
          </div>
        }
      </div>

      <div className='row'>
        <div className = 'helpfulness'>Was this review helpful?
          <u onClick = {
            () => {
              helpfulReview(id);
            }
          }>Yes
          </u>
          ({ helpfulness })
        </div>&nbsp; | &nbsp;

        <div className = 'report'>
          <u onClick = {
            () => {
              reportReview(id);
            }
          }>Report
          </u>
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;