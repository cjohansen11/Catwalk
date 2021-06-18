import React, { useState, useEffect } from 'react';
import ModalQuestion from './ModalQuestion.jsx';
import './CreateQuestion.css';

const CreateQuestion = ( {modalState, setModalState, show, setShow, featuredProduct} ) => {


  return (
    <div className="bottom-buttons-container">
      <button className="bottom-buttons question-button" title="questionButton" onClick={() => setShow(true)}>Ask Your Question</button>

    </div>
  );
};

export default CreateQuestion;



// https://upmostly.com/tutorials/modal-components-react-custom-hooks
// https://reactgo.com/react-modal-tutorial/