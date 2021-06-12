import React, {useState} from 'react';
import './ModalQuestion.css';

const ModalQuestion = ({ show, close }) => {

  return (
    <div className="modal-wrapper"
      style={{
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>Add a Question</p>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h3>Modal</h3>
          <p>Here's my modal</p>
        </div>
        <div className="modal-footer">
          <button className="btn-submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ModalQuestion;



