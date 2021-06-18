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
  const [clicked, setClicked] = useState(false);

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


  const addHelpfulQuestion = (id) => {
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${id}/helpful`,
      headers: {
        'Authorization': `${GIT_TOKEN}`
      },
      data: {
        'question_id': `${id}`
      }
    })
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="question-and-answer-container">
      <div className="question">
        <h3 className="question__text">Q: {question.question_body}</h3>
        <div className="question__right">
          <div className="helpful-line"> Helpful? &ensp;
            {!clicked ? (
              <a className="helpful-click" onClick={() => { setQuestionHelpfulness(questionHelpfulness + 1); setClicked(true); addHelpfulQuestion(question.question_id); }}>Yes {`(${questionHelpfulness})`} </a>
            ) : (
              <a className="helpful-click">Yes {`(${questionHelpfulness})`} </a>
            )}
            &ensp;| &ensp;
            <CreateAnswer className="answer_button" question_id={question.question_id}/>

          </div>
        </div>
      </div>
      <Answers answerList={answerList} question_id={question.question_id}/>
    </div>
  );
};


export default Question;