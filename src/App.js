import React from 'react';
import Flexi from './components/Flexi'
import flexiConfig from './flexiConfig'
import './App.css';

function App() {

  const onFlexiSubmit = (name, state) => {
    alert(`Person's Name : ${name}\nPerson's State : ${state}`)
  }

  return (
    <div className="App">
      <Flexi onSubmit={onFlexiSubmit} config={flexiConfig} />
    </div>
  );
}

export default App;
