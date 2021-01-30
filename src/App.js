import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCreationForm from './component/CharacterCreationForm'

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/time").then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Create your character
      </header>
      <CharacterCreationForm />;
    </div>
  );
}

export default App;
