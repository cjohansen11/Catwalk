import React, { useState, useEffect } from 'react';
import Answer from './Answer.jsx';
import './Answers.css';
import axios from 'axios';

const Answers = ( {answerList, question_id} ) => {

  const [numberOfAnswers, setNumberOfAnswers] = useState(2);
  const [toggled, setToggled] = useState(false);

  // const [answerHelpfulness, setAnswerHelpfulness] = useState(0)
  // console.log('answerList: listOfAnswers', answerList);

  useEffect(() => {
  }, [toggled, numberOfAnswers]);



  const photosArray = (photos) => {
    if (photos) {
      return photos.map((photo, i) => {
        return <img className="photo-answer" key={i} src={photo.url} />;
      });
    }
  };


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
                <div className="answer__user">by&ensp;
                  <div style={{fontWeight: "bold"}}>{answer.answerer_name}, </div>&ensp; {date}
                  <Answer answerHelpfulness={answer.helpfulness} answer_id={answer.answer_id} />
                </div>
                <div className="answer-photos">
                  {photosArray(answer.photos)}
                </div>
              </div>
            );
          }) : ''}
        {toggled ? (
          <button className="answer-button" onClick={() => { setNumberOfAnswers(2); setToggled(false) }}>Collapse Answers</button>
        ) : (
          <button className="answer-button"
            onClick={() => { setNumberOfAnswers( answerList.length); setToggled(true) }}>More Answers</button>
        )}
      </div>

    </div>
  );
};


export default Answers;