import React from 'react';

/* ** ADDTIONAL IMPORT(s) ** */
import ModalRows from './ModalRows.jsx';
import '../../styles/modal.css';

const Modal = ({ setToggleModal, featuredProduct, comparedProduct, componentName, isDarkMode }) => {

  /* ** COMPONENT VARIABLE(s) ** */
  let similarValues = [];
  let similarFeatures = [];
  let differentFeatures = [];

  /* ** ADDTIONAL FUNCTIONS ** */
  featuredProduct.features.forEach(feature => {
    comparedProduct.details.features.forEach(item => {
      if (item.value === feature.value) {
        similarFeatures.push({ type: 'similar', feature: feature.feature, value: feature.value }); similarValues.push(feature.value);
      } else {
        null;
      }
    });
  });

  return (
    <div className={`${'modal'}`} onClick={() => setToggleModal(false)} role="tooltip">
      <div className={`${isDarkMode ? 'feature-table-dark' : 'feature-table'}`}>
        <h4>Comparison Table</h4>
        <table role="grid">
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
              <td className={'feature'}>Features</td>
              <td></td>
            </tr>
            {similarFeatures.length ? similarFeatures.map(feature => {
              return <ModalRows
                key={Math.random()}
                feature={feature}
                componentName={'Related Product'} />;
            }) : null }
            {!similarFeatures.length ? featuredProduct.features.map(feature => {
              return <ModalRows
                key={Math.random()}
                feature={feature}
                type={'featured'}
                componentName={'Related Product'} />;
            }) : null}
            {!similarFeatures.length ? comparedProduct.details.features.map(feature => {
              return <ModalRows
                key={Math.random()}
                feature={feature}
                type={'compared'}
                componentName={'Related Product'} />;
            }) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Modal;