import React, { useState, useEffect } from 'react';

import Requests from '../../../../lib/RatingsReviews.js';
import StarRating from '../sharedComponents/StarRating.jsx';
import StarC from './StarC.jsx';

const AddReviewForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [headline, setHeadline] = useState('');
  const [recommended, setRecommended] = useState(false);
  const [rating, setRating] = useState(0);

  // Files
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const setRatingWrapper = (num) => {
    setRating(num);
  };

  const handleSubmit = (e) => {
    console.log('submit');
    // Requests.createReview(id, body);
  };

  const handleImageSelect = (event) => {
    if (selectedFile) {
      selectedFiles.push(selectedFile);
    }

    selectedFiles.length < 5 ? setSelectedFile(URL.createObjectURL(event.target.files[0])) : console.log('only 5');
  };

  const handleImageUpload = (event) => {
    const [file] = event.target.files;
    const fd = new FormData();

    console.log('Uploaded');
  };

  // Rating ratio
  const [ratingRadio, setratingRadio] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index) => {
    setHoverRating(index);
  };

  const onMouseLeave = () => {
    setHoverRating(0);
  };

  const onSaveRating = (index) => {
    setRating(index);
  };

  // Inside

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
            <div
              className="ok"
              styles = {{
                display: 'inline-flex'
              }}
            >
              {[1, 2, 3, 4, 5].map((value, index) => {
                return (
                  <StarC
                    key = {index}
                    index={value}
                    rating={rating}
                    hoverRating={hoverRating}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onSaveRating={onSaveRating} />
                );
              })}
            </div>
          </div>

          <div>Characteristics</div>
          {/* <Characteristics /> */}

          <div>AddPhotos
            <input type='file' accept='image/*' multiple onChange={handleImageSelect}>
            </input>
            <div>
              <img src={selectedFile} />
              <img src={selectedFiles[0]} />
              <img src={selectedFiles[1]} />
              <img src={selectedFiles[2]} />
              <img src={selectedFiles[3]} />
            </div>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AddReviewForm;