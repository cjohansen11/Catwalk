import React, { useState, useEffect } from 'react';
import Question from './Question.jsx';
import Answers from './Answers.jsx';
import './Questions.css';

const Questions = ({ listOfQuestions, listOfAnswers, setListOfAnswers }) => {

  console.log('QUESTIONS: listOfQs', listOfQuestions);
  // const [index, setIndex] = useState(0);
  // const [endIndex, setEndIndex] = useState(2);
  const [numberOfQuestions, setNumberOfQuestions] = useState(2);
  const [query, setQuery] = useState('');

  let str = 'et';
  let filteredResults = [];
  // useEffect(() => {

  useEffect(() => {
    if (listOfQuestions.results) {
      const filteredQuestions = () => {
        for (let i = 0; i < listOfQuestions.results.length; i++) {
          if (listOfQuestions.results[i].question_body.includes(query)) {
            filteredResults.push(listOfQuestions.results[i].question_body);
          }
        }
      };
      filteredQuestions();
      console.log(filteredResults);
    }
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Have a Question? Searchfor answers..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className="questions">
        <div>
          {listOfQuestions.results ?
            listOfQuestions.results.slice(0, numberOfQuestions).map(q => {
              return (
                <Question key={q.id} question={q} listOfAnswers={listOfAnswers} setListOfAnswers={setListOfAnswers} />
              );
            }) : null}
        </div>
        <button onClick={() => setNumberOfQuestions(numberOfQuestions + 2)}>More Questions</button>
      </div>
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