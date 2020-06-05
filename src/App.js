import React from 'react';
import Clicked from './components/Clicked';
import StepCounter from './components/StepCounter';
import TempConverter from './components/TempConverter';

import './App.css';

function App() {
  return (
    <>
      <h1>Reducer</h1>

      <h2>Clicked</h2>
      <Clicked />

      <h2>StepCounter</h2>
      <StepCounter max={100} step={5} />

      <h2>TempConverter</h2>
      <TempConverter />

    </>
  );
}

export default App;
