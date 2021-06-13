import React, { useState } from 'react';
import './ModalQuestion.css';
import axios from 'axios';

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
        'Authorization': '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'
      },
      data: {
        body: values.question,
        name: values.nickname,
        email: values.email,
        product_id: 19653
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

  return (
    <div className="modal-wrapper"
      style={{
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>Add a Question</p>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h3>Modal</h3>
          <div className="modal-form">
            <div className="modal-input">
              <input
                value={values.question}
                type="text"
                placeholder="Question"
                onChange={handleQuestionText}
              />
              <input
                value={values.nickname}
                type="text"
                placeholder="Nickname"
                onChange={handleNickname}
              />
              <input
                value={values.email}
                type="text"
                placeholder="Email"
                onChange={handleEmail}
              />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-submit" onClick={handleSubmit} >Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ModalQuestion;



