import React, { useState, useEffect } from 'react';
import Question from './Question.jsx';
import Answers from './Answers.jsx';
import './Questions.css';

const Questions = ({ listOfQuestions, listOfAnswers, setListOfAnswers }) => {


  const [numberOfQuestions, setNumberOfQuestions] = useState(2);
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  // console.log("listQuestions:  ",listOfQuestions)
  const filteredQuestions = () => {
    if (query.length < 3) {
      setFilteredResults(listOfQuestions.results);
    } else {
      setFilteredResults([]);
      for (let i = 0; i < listOfQuestions.results.length; i++) {
        if (listOfQuestions.results[i].question_body.toLowerCase().includes(query)) {
          setFilteredResults(prev => [...prev, listOfQuestions.results[i]]);
        }
      }
    }
    // console.log('filtered:  ', filteredResults);
  };


  useEffect(() => {
    filteredQuestions();
  }, [listOfQuestions]);

  useEffect(() => {
    filteredQuestions();
  }, [query]);


  return (
    <div>
      <input
        className="input-search"
        type="text"
        placeholder=" Have a Question? Search for answers..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className="questions">
        <div>
          {filteredResults ?
            filteredResults.slice(0, numberOfQuestions).map((q, i) => {
              // console.log(q);
              return (
                <Question key={i} question={q} listOfAnswers={listOfAnswers} setListOfAnswers={setListOfAnswers} />
              );
            }) : null}
        </div>
      </div>
      <button className="bottom-buttons" title="moreQuestionsButton" onClick={() => setNumberOfQuestions(numberOfQuestions + 2)}>More Answered Questions</button>
    </div>
  );
};

export default Questions;


