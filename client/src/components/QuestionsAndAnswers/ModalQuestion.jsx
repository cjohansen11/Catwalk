import React, { useState } from 'react';
import './ModalQuestion.css';
import axios from 'axios';
import GIT_TOKEN from '../../../../lib/config.js';

const ModalQuestion = ({ show, close }) => {

  const [values, setValues] = useState({
    question: '',
    nickname: '',
    email: ''
  });

  const addQuestion = (values) => {
    axios({
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
      headers: {
        'Authorization': `${GIT_TOKEN}`
      },
      data: {
        body: values.question,
        name: values.nickname,
        email: values.email,
        'product_id': 19653
      }
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

  };

  const handleQuestionText = e => {
    setValues({...values, question: e.target.value});
  };

  const handleNickname = e => {
    setValues({...values, nickname: e.target.value});
  };

  const handleEmail = e => {
    setValues({...values, email: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    addQuestion(values);
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
          <h3>Ask Your Question</h3>
          <div>About the "Product Name Here”</div>
          <span onClick={close} className="close-modal-btn">x</span>

        </div>
        <div className="modal-content">
          <div className="modal-body">
            <div className="modal-form">
              <div className="modal-input">
                <label>Your Question</label>
                <textarea
                  value={values.question}
                  type="textarea"
                  rows="20"
                  columns="20"
                  maxLength="1000"
                  placeholder="Your Question*"
                  onChange={handleQuestionText}
                ></textarea>
                <label>Nickname*</label>
                <input
                  ref={register({
                    required: {
                      value: true,
                      message: 'You must enter your name'
                    },
                    minLength: {
                      value: 2,
                      message: 'Your name must be at least 2 characters'
                    }
                  })}
                  value={values.nickname}
                  type="text"
                  placeholder="Example: jackson11!"
                  onChange={handleNickname}
                />
                <label>Email*</label>
                <input
                  value={values.email}
                  type="text"
                  placeholder="Why did you like the product or not?"
                  onChange={handleEmail}
                />
                <span>For authentication reasons, you will not be emailed</span>
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

export default ModalQuestion;



