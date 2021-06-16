import React, { useState, useEffect } from 'react';
import Answers from './Answers.jsx';

const Answer = ({answerHelpfulness}) => {

  const [answerHelpNum, setAnswerHelpNum] = useState(answerHelpfulness);
  const [reported, setReported] = useState('Report');

  const helpfulClick = () => {
    console.log('hello');
  };



  useEffect(() => {
  }, [answerHelpNum])

  return (
    <div>
      <a className="helpful-answer" onClick={() => setAnswerHelpNum(answerHelpNum + 1)}>&ensp;| &ensp; Helpful? Yes {`(${answerHelpNum})`} </a>
      &ensp;| &ensp;
      <a className="report-answer" onClick={() =>setReported('Reported')}>{reported}</a>
    </div>
  );
};

export default Answer;