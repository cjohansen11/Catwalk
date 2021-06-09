import React from 'react';

const ModalRows = ({ feature, product }) => {

  if (!feature.value) {
    return null;
  }

  return (
    <tr>
      <td>{`${product === 'similar' ? '✓' : product === 'featured' ? '✓' : ''}`}</td>
      <td>{feature.value}</td>
      <td>{`${product === 'similar' ? '✓' : product === 'compared' ? '✓' : ''}`}</td>
    </tr>
  );
};

export default ModalRows;