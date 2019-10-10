import React from 'react';

const rectangleContainer = {
  position: 'relative',
  zIndex: 0,
  height: '400px',
  width: '650px',
}

const pinkRectangle = {
  position: 'absolute',
  height: '250px',
  width: '350px',
  backgroundColor: '#FF00CC',
  zIndex: 1,
  top: '40px',
  left: '40px',
}

const blueRectangle = {
  position: 'absolute',
  height: '250px',
  width: '350px',
  backgroundColor: '#00FFFF',
  top: '120px',
  left: '260px',
}

function App() {
  return (
    <div style={rectangleContainer}>
      <div style={pinkRectangle}></div>
      <div style={blueRectangle}></div>
    </div>
  );
}

export default App;
