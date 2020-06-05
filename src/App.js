import React from 'react';
import Clicked from './components/Clicked';
import StepCounter from './components/StepCounter';

import './App.css';

function App() {
  return (
    <>
      <h1>Reducer</h1>

      <h2>Clicked</h2>
      <Clicked />

      <h2>StepCounter</h2>
      <StepCounter max={100} step={5} />

    </>
  );
}

export default App;
