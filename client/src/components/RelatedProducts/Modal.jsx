import React from 'react';

import ModalRows from './ModalRows.jsx';
import '../../styles/modal.css';

const Modal = ({ setToggleModal, featuredProduct, comparedProduct }) => {

  console.log('featured', featuredProduct.features);
  console.log('compared', comparedProduct.details.features);
  return (
    <div className={`${'modal'}`} onClick={() => setToggleModal(false)}>
      <div className={`${'feature-table'}`}>
        <button className={'button'} onClick={() => setToggleModal(false)}>Close</button>
        <h4>Comparing</h4>
        <table>
          <thead>
            <tr>
              <th colSpan="1">{featuredProduct.name}</th>
              <th colSpan="1"></th>
              <th colSpan="1">{comparedProduct.details.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Features</td>
              <td></td>
            </tr>
            {featuredProduct.features.map(feature => {
              return <ModalRows
                feature={feature}
                product={'featured'} />;
            })}
            {comparedProduct.details.features.map(feature => {
              return <ModalRows
                feature={feature}
                product={'compared'} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Modal;