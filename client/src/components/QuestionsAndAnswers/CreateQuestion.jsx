import React, { useState, useEffect } from 'react';
import ModalQuestion from './ModalQuestion.jsx';

const CreateQuestion = () => {

  const [modalState, setModalState] = useState(false);
  const [show, setShow] = useState(false);

  const addClick = () => {
    console.log('add clicked');
  };

  const closeModalHandler = () => setShow(false);


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