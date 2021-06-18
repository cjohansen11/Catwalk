import React, { useState, useEffect } from 'react';
import Questions from './Questions.jsx';
import Answers from './Answers.jsx';
import CreateQuestion from './CreateQuestion.jsx';
import axios from 'axios';
import GIT_TOKEN from '../../../../lib/config.js';
import featured from '../App.jsx';
import ModalQuestion from './ModalQuestion.jsx';
import ModalAnswer from './ModalQuestion.jsx';
import CreateAnswer from './CreateAnswer.jsx';
import App from '../App.jsx';
import './QuestionsAndAnswers.css';

const QuestionsAndAnswers = ( {featuredProduct, setFeaturedProduct, isDarkMode}) => {


const QuestionsAndAnswers = ( {featuredProduct, setFeaturedProduct, clickTracker, componentName }) => {

  const [listOfQuestions, setListOfQuestions] = useState([]);
  const [listOfAnswers, setListOfAnswers] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [show, setShow] = useState(false);


  const addClick = () => {
    console.log('add clicked');
  };


  const closeModalHandler = () =>
    setShow(false);
  const firstCall = (id) => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
      {headers: {
        'Authorization': `${GIT_TOKEN}`
      },
      params: {
        product_id: id
      }
      })
      .then((res) => {
        // console.log('setListOfQuestions:  ', res.data);
        setListOfQuestions(res.data);
        console.log('listOfQuestions:  ', listOfQuestions);
        console.log('listOfAnswers:  ', listOfAnswers);
        // postReq();
        console.log('featuredProduct:  ', JSON.stringify(featuredProduct))
      })
      .catch((err) => {
        // console.log('featuredProduct', featuredProduct);
        console.log(err);
      });
  };


  useEffect(() => {
    firstCall(featuredProduct.id);
  }, [featuredProduct]);

  return (
    <div onClick={e => clickTracker(e, componentName)}>
      <div className="questions-and-answers">
        <h2 className="title-qa">QUESTIONS & ANSWERS</h2>
        <Questions
          setListOfAnswers={setListOfAnswers}
          listOfQuestions={listOfQuestions}
          featuredProduct={featuredProduct}
          listOfAnswers={listOfAnswers}/>
        <CreateQuestion
          featuredProduct={featuredProduct}
          modalState={modalState}
          setModalState={setModalState}
          show={show}
          setShow={setShow} />
      </div>
      <ModalQuestion className="modal-question" close={closeModalHandler} show={show} featuredProduct={featuredProduct} setShow={setShow} />
    </div>
  );
};

export default QuestionsAndAnswers;


