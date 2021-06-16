import React, { useState, useEffect } from 'react';
import ModalAnswer from './ModalAnswer.jsx';
import './CreateAnswer.css';

const CreateAnswer = () => {

  const [modalState, setModalState] = useState(false);
  const [show, setShow] = useState(false);

  const addClick = () => {
    console.log('add clicked');
  };

  const closeModalHandler = () => setShow(false);

  return (
    <div>
       <a className="add-answer-button" onClick={() => setShow(true)}>Add Answer</a>
      <ModalAnswer close={closeModalHandler} show={show}/>
    </div>
  );
};

export default CreateAnswer;