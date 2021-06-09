import React from 'react';

import '../../styles/modal.css';

const Modal = ({ setToggleModal }) => {
  return (
    <div className={`${'modal'}`} onClick={() => setToggleModal(false)}>
      <div className={`${'feature-table'}`}>
        <button className={'button'} onClick={() => setToggleModal(false)}>Close</button>
        <h4>Comparing</h4>
        <table>
          <thead>
            <tr>
              <th colSpan="1">Feature Product Name</th>
              <th colSpan="1"></th>
              <th colSpan="1">Comparing Product Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Features</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Modal;