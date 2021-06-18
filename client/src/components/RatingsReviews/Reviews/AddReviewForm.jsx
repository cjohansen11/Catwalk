import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Requests from '../../../../../lib/RatingsReviews.js';
import StarRating from '../../sharedComponents/StarRating.jsx';
import StarC from './StarC.jsx';

import './styles/addReviewForm.css';

const AddReviewForm = ({
  characteristics2,
  productId
}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [headline, setHeadline] = useState('');
  const [recommended, setRecommended] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [characteristics, setCharacteristics] = useState({});
  const [charIds, setCharIds] = useState([]);
  const [size, setSize] = useState(null);
  const [width, setWidth] = useState(null);
  const [comfort, setComfort] = useState(null);
  const [quality, setQuality] = useState(null);

  const [reviewsMetadata, setReviewsMetadata] = useState([]);

  // Star rating
  const [ratingRadio, setratingRadio] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const setRatingWrapper = (num) => {
    setRating(num);
  };

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setBody('');
    setHeadline('');
    setRecommended(false);
    setRating(0);
    setSelectedFile(null);
    setSelectedFiles([]);
    setCharacteristics({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let postRequestBody = {
      'product_id': Number(productId),
      'rating': Number(rating),
      'summary': headline,
      'body': body,
      'recommend': recommended,
      'name': username,
      'email': email,
      'photos': selectedFiles,
      'characteristics': characteristics,
    };

    //
    console.log(postRequestBody);

    Requests.createReview(productId, postRequestBody)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  let possibleCharacteristics = ['size', 'width', 'comfort', 'quality'];
  let sizeFit = ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too big'];
  let widthFit = ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];
  let comfortFit = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
  let qualityFit = ['Poor', 'Below Average', 'What I expected', 'Pretty great', 'Perfect'];

  const characteristicsKeys = ['Comfort', 'Fit', 'Quality', 'Length'];

  useEffect(() => {
    let characteristicsIdandValue = {};
    size ? characteristicsIdandValue[charIds[0]] = Number(size) : null;
    width ? characteristicsIdandValue[charIds[1]] = Number(width) : null;
    comfort ? characteristicsIdandValue[charIds[2]] = Number(comfort) : null;
    quality ? characteristicsIdandValue[charIds[3]] = Number(quality) : null;
    setCharacteristics(characteristicsIdandValue);
  }, [size, width, comfort, quality]);

  const handleImageSelect = (event) => {
    // if (selectedFile) {
    //   selectedFiles.push(selectedFile);
    // }

    // selectedFiles.length < 5 ? setSelectedFile(URL.createObjectURL(event.target.files[0])) : console.log('only 5');


  };
  const handleImageUpload = (event) => {
    // const [file] = event.target.files;
    // const fd = new FormData();
    // console.log('Uploaded');
    setSelectedFiles([...selectedFiles, event.target.files[0]]);
  };

  // Star rating

  const onMouseEnter = (index) => {
    setHoverRating(index);
  };

  const onMouseLeave = () => {
    setHoverRating(0);
  };

  const onSaveRating = (index) => {
    setRating(index);
  };

  return (
    <div>
      <h4>Add Review</h4>
      <div className = 'containerform'>
        <form onSubmit = {handleSubmit}>
          <div>
            <div className = 'col-25'>
              <label>Username</label>
            </div>

            <div className = 'col-75'>
              <input
                type = 'text'
                value = { username }
                onChange = {
                  (e) => {
                    setUsername(e.target.value);
                  }
                } required />
            </div>
          </div>

          <div>
            <div className = 'col-25'>
              <label>Email</label>
            </div>

            <div className = 'col-75'>
              <input
                type = 'email'
                value = { email }
                onChange = {
                  (e) => {
                    setEmail(e.target.value);
                  }
                } required />
            </div>
          </div>

          <div>
            <div className = 'col-25'>
              <label>Body</label>
            </div>

            <div className = 'col-75'>
              <textarea
                type = 'text'
                value = { body }
                onChange = {
                  (e)=>{
                    setBody(e.target.value);
                  }
                } ></textarea>
            </div>
          </div>

          <div>
            <div className = 'col-25'>
              <label>Recommended?</label>
            </div>
            <div className = 'col-75'>
              <input
                type='radio'
                value='Yes'
                checked = { recommended === true}
                onChange={
                  () => {
                    setRecommended(true);
                  }
                }
              />Yes
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
            </div>
          </div>

          <div>
            <div className = 'col-25'>
              <label>Headline</label>
            </div>
            <div className = 'col-75'>
              <input
                type = 'text'
                value = {headline}
                onChange = {
                  (e) => {
                    setHeadline(e.target.value);
                  }
                }
              ></input>
            </div>
          </div>

          <div>
            <div className = 'col-25'>
              <label>Review Rating
              </label>
            </div>

            <div className = 'col-75'>
              <div
                className="ok"
                styles = {{
                  display: 'inline-flex'
                }}
              >
                {[1, 2, 3, 4, 5].map((value, index) => {
                  return (
                    <StarC
                      key = { index }
                      index = { value }
                      rating = { rating }
                      hoverRating = { hoverRating }
                      onMouseEnter = { onMouseEnter }
                      onMouseLeave = { onMouseLeave }
                      onSaveRating = { onSaveRating }
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <div className = 'col-25'>
              <label>Characteristics</label>
            </div>

            <div className = 'col-75'>
              <div className='characteristics'>
                {characteristicsKeys.map((key, i) => {
                  return (<div key={i} value={key}>{key}
                    <span ><input type='radio' name={key} onClick={
                      () => {
                        key === 'Size' ? setSize(event.target.value) :
                          key === 'Width' ? setWidth(event.target.value) :
                            key === 'Comfort' ? setComfort(event.target.value) :
                              key === 'Quality' ? setQuality(event.target.value) :
                                null;
                      }} value={1}/>1</span>
                    <span ><input type='radio' name={key} onClick={
                      () => {
                        key === 'Size' ? setSize(event.target.value) :
                          key === 'Width' ? setWidth(event.target.value) :
                            key === 'Comfort' ? setComfort(event.target.value) :
                              key === 'Quality' ? setQuality(event.target.value) :
                                null;
                      }} value={2}/>2</span>
                    <span ><input type='radio' name={key} onClick={
                      () => {
                        key === 'Size' ? setSize(event.target.value) :
                          key === 'Width' ? setWidth(event.target.value) :
                            key === 'Comfort' ? setComfort(event.target.value) :
                              key === 'Quality' ? setQuality(event.target.value) :
                                null;
                      }} value={3}/>3</span>
                    <span ><input type='radio' name={key} onClick={
                      () => {
                        key === 'Size' ? setSize(event.target.value) :
                          key === 'Width' ? setWidth(event.target.value) :
                            key === 'Comfort' ? setComfort(event.target.value) :
                              key === 'Quality' ? setQuality(event.target.value) :
                                null;
                      }} value={4}/>4</span>
                    <span ><input type='radio' name={key} onClick={
                      () => {
                        key === 'Size' ? setSize(event.target.value) :
                          key === 'Width' ? setWidth(event.target.value) :
                            key === 'Comfort' ? setComfort(event.target.value) :
                              key === 'Quality' ? setQuality(event.target.value) :
                                null;
                      }} value={5}/>5</span>
                    <span>{
                      size && key === 'Size' ? sizeFit[size - 1] :
                        width && key === 'Width' ? widthFit[width - 1] :
                          comfort && key === 'Comfort' ? comfortFit[comfort - 1] :
                            quality && key === 'Quality' ? qualityFit[quality - 1] :
                              null
                    }</span>
                  </div>);
                })}
              </div>
            </div>
          </div>

          <div>
            <div className = 'col-25'>
              <label>Add Photos</label>
            </div>
            <div className = 'col-75'>
              {
                selectedFiles.length < 5 && <input
                  type = 'file'
                  accept = 'image/*'
                  onChange = { handleImageUpload }
                />
              }

              <div className = 'photoThumbsnailForm'>
                {_.map(selectedFiles,
                  (file, idx) => (
                    <img
                      key = { idx }
                      src = { URL.createObjectURL(file) }
                      alt = { file.name }
                    />
                  )
                )}
              </div>
            </div>
          </div>

          <input
            className='buttonMarko'
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

AddReviewForm.propTypes = {
  productId: PropTypes.number.isRequired,
  characteristics2: PropTypes.object.isRequired
};

export default AddReviewForm;