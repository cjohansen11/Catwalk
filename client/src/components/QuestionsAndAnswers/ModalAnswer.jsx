import React, { useState } from 'react';
import './ModalAnswer.css';
import axios from 'axios';
import GIT_TOKEN from '../../../../lib/config.js';

const ModalAnswer = ({ show, close }) => {

  const [values, setValues] = useState({
    answer: '',
    nickname: '',
    email: ''
  });

  const addAnswer = (values) => {
    axios({
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${quetion_id}/answers`,
      headers: {
        'Authorization': `${GIT_TOKEN}`
      },
      data: {
        body: values.answer,
        name: values.nickname,
        email: values.email,
        'product_id': 19089
      }
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

  };

  const handleAnswerText = e => {
    setValues({...values, answer: e.target.value});
  };

  const handleNickname = e => {
    setValues({...values, nickname: e.target.value});
  };

  const handleEmail = e => {
    setValues({...values, email: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    addAnswer(values);
    setValues({
      question: '',
      nickname: '',
      email: ''
    });
  };

  if (show === true) {
    return (
      <div className="modal-wrapper"
        style={{
          opacity: show ? '1' : '0'
        }}
      >
        <div className="modal-header">
          <p>Submit your Answer</p>
          <span onClick={close} className="close-modal-btn">x</span>
        </div>
        <div className="modal-content">
          <div className="modal-body">
            <div className="modal-form">
              <div className="modal-input">
                <label>Your Answer*</label>
                <textarea
                  value={values.answer}
                  type="textarea"
                  rows="20"
                  columns="20"
                  maxLength="1000"
                  placeholder="Your Question*"
                  onChange={handleAnswerText}
                ></textarea>
                <label>What is your nickname*</label>
                <input
                  value={values.nickname}
                  type="text"
                  placeholder="Example: jack543!"
                  onChange={handleNickname}
                />
                <label>Your Email*</label>
                <input
                  value={values.email}
                  type="text"
                  placeholder="Example: jack@email.com"
                  onChange={handleEmail}
                />
                <span>For authentication reasons, you will not be emailed</span>
                <input type="file" accept="image/*" multiple/>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn-submit" onClick={handleSubmit} >Submit</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
      </div>
    );
  }
};

export default ModalAnswer;



