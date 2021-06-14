import React from 'react';

const CharacteristicsBars = ({data}) => {
  const containerStyles = {
    height: '7',
    width: '80%',
    backgroundColor: '#e0e0de',
    margin: 'auto',
    display: 'inline-block'
  };

  let pointer = (<span className="" style={{
    left: `${(Number(data) - 1) * 100 / 4}%`,
    position: 'relative',
    top: '-7px'
  }}>&#x25BE;</span>);

  return (
    <div>
      <span></span>
      <div style={containerStyles}>
        {pointer}
      </div>
    </div>
  );
};

export default CharacteristicsBars;