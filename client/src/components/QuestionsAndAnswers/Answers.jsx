import React, { useState } from 'react';
import './Answers.css';

const Answers = ( {answerList} ) => {

  const [numberOfAnswers, setNumberOfAnswers] = useState(2);
  // console.log('answerList: listOfAnswers', answerList);
  return (
    <div className="answers">
      <h3 className="answers-title">A:</h3>
      <div className="answer-container">
        {answerList ?
          answerList.slice(0, numberOfAnswers).map((answer, index) => {
            let date = new Date(answer.date).toDateString().split(' ').slice(1).join(', ');
            return (
              <div className="answer" key={index}>
                <div className="answer-body"> {answer.body}</div>
                <div className="answer__user">by {answer.answerer_name}, {date} | Helpful?  Yes {`(${answer.helpfulness})`} | Report</div>
              </div>
            );
          }) : ''}
      </div>
      <button className="answer-button" onClick={() => setNumberOfAnswers(numberOfAnswers + 2)}>More Answers</button>
    </div>
  );
};


export default Answers;