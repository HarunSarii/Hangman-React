import React from 'react'
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters />
        <Word />
        <Popup />
        <Notification />
      </div>
    </div>
  );
}

export default App;
