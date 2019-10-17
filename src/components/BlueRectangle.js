import React from 'react';

const blueRectangle = {
  position: 'absolute',
  height: '250px',
  width: '350px',
  backgroundColor: '#00FFFF',
  top: '120px',
  left: '260px',
}

const BlueRectangle = () => (
  <div style={blueRectangle} id="blueRectangle"></div>
)

export default BlueRectangle;
