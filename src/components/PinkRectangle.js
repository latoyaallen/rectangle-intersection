import React from 'react';

const pinkRectangle = {
  position: 'absolute',
  height: '250px',
  width: '350px',
  backgroundColor: '#FF00CC',
  zIndex: 1,
  top: '40px',
  left: '40px',
}

const PinkRectangle = () => (
  <div style={pinkRectangle} id="pinkRectangle"></div>
)

export default PinkRectangle;
