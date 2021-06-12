import React, { useState, useEffect } from 'react';

import Requests from '../../../../lib/RatingsReviews.js';
import StarRating from './StarRating.jsx';

const AddReviewForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [headline, setHeadline] = useState('');
  const [recommended, setRecommended] = useState(false);
  const [rating, setRating] = useState(0);

  const setRatingWrapper = (num) => {
    setRating(num);
  };

  const handleSubmit = (e) => {
    // Requests.createReview(id, body);
  };

  return (
    <div>
      <h4>AddReviewForm</h4>
      <div>
        <form onSubmit = {handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type = 'text'
              value = { username }
              onChange = {
                (e) => {
                  setUsername(e.target.value);
                }
              } required />
          </div>

          <div>
            <label>Email</label>
            <input
              type = 'email'
              value = { email }
              onChange = {
                (e) => {
                  setEmail(e.target.value);
                }
              } required />
          </div>

          <div>
            <label>Body</label>
            <textarea
              type = 'text'
              value = { body }
              onChange = {
                (e)=>{
                  setBody(e.target.value);
                }
              } ></textarea>
          </div>

          <div>
            <label>Recommended?
              <input
                type='radio'
                value='Yes'
                checked={ recommended === true}
                onChange={
                  () => {
                    setRecommended(true);
                  }
                }
              />Yes
            </label>
            <label>
              <input
                type='radio'
                value='No'
                checked={recommended === false}
                onChange={
                  () => {
                    setRecommended(false);
                  }
                }
              />No
            </label>
          </div>

          <div>
            <label>Headline</label>
            <input
              type='text'
              value={headline}
              onChange={(e)=>{ setHeadline(e.target.value); }}
            ></input>
          </div>

          <div>ReviewRating
            {/* <StarRating
              rating = { rating }
              setRatingWrapper = { setRatingWrapper }
            /> */}
          </div>

          <div>Characteristics</div>
          {/* <Characteristics /> */}

          <div>AddPhotos</div>
          {/* <AddPhotos /> */}
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AddReviewForm;