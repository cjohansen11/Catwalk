import React, { useState } from 'react';

const Answers = ( {listOfAnswers} ) => {



  // console.log('ANSWERS: listOfAnswers', listOfAnswers);
  return (
    <div>
      <section>
        <h3>A:</h3>
        {listOfAnswers.results ?
          listOfAnswers.results.map(answer => {
            return (
              <React.Fragment key={answer.body}>
                <div> {answer.body}</div>
                <div>by {answer.answerer_name}, {answer.date} | Helpful? Yes {`(${answer.helpfulness})`}| Report</div>
              </React.Fragment>
            );
          }) : null}
      </section>
    </div>
  );
};


export default Answers;