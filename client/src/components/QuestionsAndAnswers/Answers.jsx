import React, { useState } from 'react';

const Answers = ( {test} ) => {



  console.log('TEST: listOfAnswers', test);
  return (
    <div>
      <section>
        <h3>A:</h3>
        {test ?
          test.map(answer => {
            return (
              <div>
                <div> {answer.body}</div>
                <div>by {answer.answerer_name}, {answer.date} | Helpful? Yes {`(${answer.helpfulness})`}| Report</div>
              </div>
            );
          }) : ''}
      </section>
    </div>
  );
};


export default Answers;