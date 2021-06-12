import React, { useState, useEffect } from 'react';
import Questions from './Questions.jsx';
import Search from './Search.jsx';
import Answers from './Answers.jsx';
import CreateQuestion from './createQuestion.jsx';
import axios from 'axios';
import { TOKEN } from './config.js';

const QuestionsAndAnswers = () => {

  const [featuredProduct, setFeaturedProduct] = useState({});
  const [listOfQuestions, setListOfQuestions] = useState([]);
  const [listOfAnswers, setListOfAnswers] = useState([]);


  // GET For currrent product

  const firstCall = () => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/19089/',
      {headers: {
        'Authorization': `${TOKEN}`
      }
      })
      .then((res) => {
        console.log('featuredProduct:  ', res.data);
        setFeaturedProduct(res.data);
        return res.data;
      })
      .then((res) => {
        axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
          {headers: {
            'Authorization': `${TOKEN}`
          },
          params: {
            product_id: 19090
          }
          })
          .then((res) => {
            // console.log('setListOfQuestions:  ', res.data);
            setListOfQuestions(res.data);
            // postReq();
          });
      });
  };

  const postReq = () => {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
      {headers: {
        'Authorization': `${TOKEN}`
      },
      data: {
        body: 'test for question post',
        name: 'Johnny',
        email: 'hognnyapples@gmail.com',
        product_id: 19089
      }
      })
      .then((res) => {
      // console.log('setListOfQuestions:  ', res.data);
        // setListOfQuestions(res.data);
      // postReq();
        console.log('this post worked');
      })
      .catch((error)=> {
        console.log('this failed big timmmmmme');
      });
  };

  // var optionsQ = {
  //   method: post,
  //   url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
  //   headers: {
  //     'Authorization': `${TOKEN}`
  //   },
  //   params: {
  //     'text': 'test for question post',
  //     'name': 'Johnny',
  //     'email': 'hognnyapples@gmail.com',
  //     'product_id': '19089'
  //   }
  // };



  useEffect(() => {
    firstCall();

  }, []);

  // should be set with feature product questionid??
  // useEffect(() => {
  //   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/183056/answers',
  //     {headers: {
  //       'Authorization': `${TOKEN}`
  //     },
  //     }
  //   )
  //     .then((res) => {
  //       console.log('setListOfAnswers:  ', res.data);
  //       setListOfAnswers(res.data);
  //     });
  // }, [featuredProduct]);



  return (
    <div>
      <h1>Questions & Answers</h1>
      <button onClick={() => postReq()}>postReq</button>
      <Search />
      <Questions setListOfAnswers={setListOfAnswers} listOfQuestions={listOfQuestions} featuredProduct={featuredProduct} listOfAnswers={listOfAnswers}/>
      <CreateQuestion />
    </div>
  );
};

export default QuestionsAndAnswers;




// https://stackoverflow.com/questions/43051291/attach-authorization-header-for-all-axios-requests



// POST /qa/questions Adds a question for the given product

// const addQuestion = (body) => {
//   axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/19089/',
//     {headers: {
//       'Authorization': `${TOKEN}`
//     }
//     })
//     .then((res) => {
//       console.log('featuredProduct:  ', res.data);
//       setFeaturedProduct(res.data);
//     });
// };


// GET /qa/questions Retrieves a list of questions for a particular product

// useEffect(() => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
//     {headers: {
//       'Authorization': `${TOKEN}`
//     },
//     params: {
//       product_id: featuredProduct.id
//     }
//     }
//   )
//     .then((res) => {
//       console.log('setListOfQuestions:  ', res.data);
//       setListOfQuestions(res.data);
//     });
// }, [featuredProduct]);

// GET /qa/questions/:question_id/answers Retrieves a list of ANSWERS for a particular product


