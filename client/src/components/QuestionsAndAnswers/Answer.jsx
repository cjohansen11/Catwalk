import React, { useState, useEffect } from 'react';
import Answers from './Answers.jsx';

const Answer = ({answerHelpfulness}) => {

  const [answerHelpNum, setAnswerHelpNum] = useState(answerHelpfulness);
  const [clicked, setClicked] = useState(false);
  const [reported, setReported] = useState('Report');

  const helpfulClick = () => {
    console.log('hello');
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