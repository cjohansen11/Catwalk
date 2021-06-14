import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answers from './Answers.jsx';
import './Question.css';
import CreateAnswer from './CreateAnswer.jsx';
import GIT_TOKEN from '../../../../lib/config.js';
// import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';

const Question = ( {question, listOfAnswers, setListOfAnswers}) => {

  const [answerList, setAnswerList] = useState(null);
  const [questionHelpfulness, setQuestionHelpfulness] = useState(question.question_helpfulness);
  console.log(questionHelpfulness)
  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${question.question_id}/answers`,
      {headers: {
        'Authorization': `${GIT_TOKEN}`
      },
      }
    )
      .then((res) => {
        // console.log('setListOfAnswers:  ', res.data);
        setListOfAnswers(res.data);
        setAnswerList(res.data.results);
      });
  }, [question.question_id]);

  useEffect(() => {
  }, [answerList, questionHelpfulness]);



  const addHelpful = (values) => {
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${quetion_id}/helpful`,
      headers: {
        'Authorization': `${GIT_TOKEN}`
      },
      data: {
        body: values.answer,
        name: values.nickname,
        email: values.email,
        'product_id': `${question_id}`
      }
    })
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

  };
  // if (listOfAnswers.results) {
  // console.log('listOfAnswers', listOfAnswers.results)
  // }
  // const [currentId, setCurrentId] = useState({});

  return (
    <div className="question-and-answer-container">
      <div className="question">
        <h3 className="question__text">Q: {question.question_body}</h3>
        <div className="question__right">
          <div className="helpful-line"> Helpful? &ensp;
          <a onClick={() => setQuestionHelpfulness(questionHelpfulness + 1)}>Yes {`(${questionHelpfulness})`} </a> &ensp;| &ensp;
            <CreateAnswer className="answer_button"/>

          </div>
        </div>
      </div>
      <Answers answerList={answerList}/>
    </div>
  );
};


export default Question;