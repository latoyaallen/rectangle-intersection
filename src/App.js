import React from 'react';
import PinkRectangle from './components/PinkRectangle'
import BlueRectangle from './components/BlueRectangle'

const rectangleContainer = {
  position: 'relative',
  zIndex: 0,
  height: '400px',
  width: '650px',
}



function App() {
  return (
    <div style={rectangleContainer}>
      <PinkRectangle />
      <BlueRectangle />
    </div>
  );
}

export default App;
