import React, { useState, useEffect } from 'react';
import Answers from './Answers.jsx';
import axios from 'axios';
import GIT_TOKEN from '../../../../lib/config.js';

const Answer = ({answerHelpfulness, answer_id}) => {

  const [answerHelpNum, setAnswerHelpNum] = useState(answerHelpfulness);
  const [clicked, setClicked] = useState(false);
  const [reported, setReported] = useState('Report');

  console.log('answerID:  ', answer_id)
  const helpfulClick = (id) => {
    console.log(id);
  };

  const addHelpfulAnswer = (id) => {
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${id}/helpful`,
      headers: {
        'Authorization': `${GIT_TOKEN}`
      },
      params: {
        answer_id: `${id}`
      }
    })
      .then((data) => {
        // console.log(data);
      })
      .catch((err) => {
        // console.log(id)
        console.log(err);
      });

  };

  const report = (id) => {
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${id}/report`,
      headers: {
        'Authorization': `${GIT_TOKEN}`
      },
      params: {
        'answer_id': `${id}`
      }
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

  };



  useEffect(() => {
  }, [answerHelpNum]);

  return (
    <div>
      {!clicked ? (
        <a className="helpful-answer" onClick={() => { setAnswerHelpNum(answerHelpNum + 1); setClicked(true); addHelpfulAnswer(answer_id); }}>&ensp;| &ensp; Helpful? Yes {`(${answerHelpNum})`} </a>

      ) : (
        <a className="helpful-answer">&ensp;| &ensp; Helpful? Yes {`(${answerHelpNum})`} </a>
      )}
    &ensp;| &ensp;
      <a className="report-answer" onClick={() => { setReported('Reported'); report(answer_id); }}>{reported}</a>
    </div>

  );
};

export default Answer;