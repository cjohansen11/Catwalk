import React, { useState, useEffect } from 'react';
import ModalQuestion from './ModalQuestion.jsx';

const CreateQuestion = () => {

  const [modalState, setModalState] = useState(false);
  const [show, setShow] = useState(false)

  const addClick = () => {
    console.log('add clicked')
  }

  const closeModalHandler = () => setShow(false);
  // Adds a question for the given product POST /qa/questions
  // const addQuestion = () => {
  //   axios({
  //     method: 'post',
  //     url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions',
  //     headers: {
  //       'Authorization': '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'
  //     },
  //     data: {
  //       body: 'hello',
  //       name: 'marko',
  //       email: 'm@me.com',
  //       product_id: 19089
  //     }
  //   }).then((data) => {
  //     console.log(data);
  //   });
  // };




  // Adds a question for the given product POST /qa/questions

  return (
    <div>
      <button onClick={() => setShow(true)}>Add a Question</button>
      <ModalQuestion close={closeModalHandler} show={show}/>
    </div>
  );
};

export default CreateQuestion;



// https://upmostly.com/tutorials/modal-components-react-custom-hooks
// https://reactgo.com/react-modal-tutorial/