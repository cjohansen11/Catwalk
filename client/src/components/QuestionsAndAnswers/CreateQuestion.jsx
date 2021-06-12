import React, { useState, useEffect } from 'react';
import ModalQuestion from './ModalQuestion.jsx';

const CreateQuestion = () => {

  const [modalState, setModalState] = useState(false);

  const manageState = () => {
    console.log('modalshowing');
    setModalState(!modalState);
  };


  // Adds a question for the given product POST /qa/questions

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


  return (
    <div>
      <button >Add a Question</button>
    </div>
  );
};

export default CreateQuestion;



// https://upmostly.com/tutorials/modal-components-react-custom-hooks


// https://reactgo.com/react-modal-tutorial/