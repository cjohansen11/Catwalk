import React, { useState } from 'react';
import './Answers.css';

const Answers = ( {answerList} ) => {

  // console.log('answerList: listOfAnswers', answerList);
  return (
    <div className="answers">
      <h3 className="answers-title">A:</h3>
      <div className="answer-container">
        {answerList ?
          answerList.map(answer => {
            return (
              <div className="answer">
                <div className="answer-body"> {answer.body}</div>
                <div className="answer__user">by {answer.answerer_name}, {answer.date} | Helpful? Yes {`(${answer.helpfulness})`}| Report</div>
              </div>
            );
          }) : ''}
      </div>
    </div>
  );
};


export default Answers;