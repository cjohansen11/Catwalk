import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answers from './Answers.jsx';

import { TOKEN } from './config.js';
// import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';

const Question = ( {question, listOfAnswers, setListOfAnswers}) => {

const [test, setTest] = useState(null)

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
        setTest(res.data.results)
      });
  }, [question.question_id]);

  useEffect(() => {
    // console.log('TEST:',   test)
  }, [test])
  // if (listOfAnswers.results) {
  // console.log('listOfAnswers', listOfAnswers.results)
  // }
  // const [currentId, setCurrentId] = useState({});

  return (
    <div>
      <h3>Q: {question.question_body}</h3>
      <div> Helpful? Yes {`(${question.question_helpfulness})`} | Report</div>
      <Answers test={test}/>
    </div>
  );
};


export default Question;