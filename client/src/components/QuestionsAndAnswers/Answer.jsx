import React, { useState, useEffect } from 'react';
import Answers from './Answers.jsx';

const Answer = ({answerHelpfulness}) => {

  const [answerHelpNum, setAnswerHelpNum] = useState(answerHelpfulness);
  const [clicked, setClicked] = useState(false);
  const [reported, setReported] = useState('Report');

  console.log('answerHelpfulness:  ', answerHelpfulness)
  const helpfulClick = () => {
    console.log('hello');
  };

  const addHelpfulAnswer = () => {
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${quetion_id}/helpful`,
      headers: {
        'Authorization': `${GIT_TOKEN}`
      },
      data: {
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

  const report = () => {
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${quetion_id}/report`,
      headers: {
        'Authorization': `${GIT_TOKEN}`
      },
      params: {
        'question_id': `${question_id}`
      }
    })
      .then((data) => {
        // console.log(data);
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
        <a className="helpful-answer" onClick={() => { setAnswerHelpNum(answerHelpNum + 1); setClicked(true); }}>&ensp;| &ensp; Helpful? Yes {`(${answerHelpNum})`} </a>

      ) : (
        <a className="helpful-answer">&ensp;| &ensp; Helpful? Yes {`(${answerHelpNum})`} </a>
      )}
    &ensp;| &ensp;
      <a className="report-answer" onClick={() =>setReported('Reported')}>{reported}</a>
    </div>

  );
};

export default Answer;