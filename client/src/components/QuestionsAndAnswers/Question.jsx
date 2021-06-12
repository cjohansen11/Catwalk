import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answers from './Answers.jsx';

import { TOKEN } from './config.js';


const Question = ( {question, listOfAnswers, setListOfAnswers}) => {
  // console.log('QUESTION_ID:  ', question.question_id)

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${question.question_id}/answers`,
      {headers: {
        'Authorization': `${TOKEN}`
      },
      }
    )
      .then((res) => {
        // console.log('setListOfAnswers:  ', res.data);
        setListOfAnswers(res.data);
      });
  }, [question.question_id]);

  // if (listOfAnswers.results) {
  // // console.log('listOfAnswers', listOfAnswers.results)
  // }

  return (
    <React.Fragment key={question.question_body}>
      <h3>Q: {question.question_body}</h3>
      <div> Helpful? Yes {`(${question.question_helpfulness})`} | Report</div>
      <Answers listOfAnswers={listOfAnswers} />
    </React.Fragment>
  );
};


export default Question;