import React, { useState, useEffect } from 'react';
import Question from './Question.jsx';
import Answers from './Answers.jsx';

const Questions = ({ listOfQuestions, listOfAnswers, setListOfAnswers }) => {

  // console.log('QUESTIONS: listOfQs', listOfQuestions);
  // const [index, setIndex] = useState(0);
  // const [endIndex, setEndIndex] = useState(2);

  // FILTER FOR SEARCH RESULTS
  // NEEDS TO UPDATE STATE-- MAYBE SET EQUAL TO THE WHOLE LIST AND CHANGE ACCORDINGLY?

  // if (listOfQuestions.results) {
  //   const filtered = listOfQuestions.results.filter(list => {
  //     // console.log('list', list)
  //     if (list.question_body.includes('who')) {
  //       // console.log('filtered:  ', list.question_body)
  //     }
  //   });
  // }
  return (
    <div>
      <section>
        {listOfQuestions.results ?
          listOfQuestions.results.map(q => {
            return (
              <Question key={q.id} question={q} listOfAnswers={listOfAnswers} setListOfAnswers={setListOfAnswers} />
            );
          }) : null}
      </section>
    </div>
  );
};

export default Questions;


/*
map listOfQuestions --- .question_body to a div

/*
        {listOfQuestions.results.map((x) => {
          return (
            <div key={x.question_body} question={x.question_body}>{x.question_body}</div>
          );
        })
        };
*/