import React from 'react';

const ModalRows = ({ feature, type, componentName }) => {
  if (!feature.value) {
    return null;
  }

  return (
    <tr>
      <td>{`${feature.type === 'similar' ? '✓' : type === 'featured' ? '✓' : ''}`}</td>
      <td>{`${feature.feature} - ${feature.value}`}</td>
      <td>{`${feature.type === 'similar' ? '✓' : type === 'compared' ? '✓' : ''}`}</td>
    </tr>
  );
};

export default ModalRows;