import React from 'react';

const ModalRows = ({ feature, product }) => {
  console.log('feature', feature);
  if (!feature.value) {
    return null;
  }

  return (
    <tr>
      <td>{`${product === 'featured' ? '✓' : ''}`}</td>
      <td>{feature.value}</td>
      <td>{`${product === 'compared' ? '✓' : ''}`}</td>
    </tr>
  );
};

export default ModalRows;