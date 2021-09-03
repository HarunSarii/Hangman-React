import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

// const correctLetters = [];
// const wrongLetters = [];

function App({ letter }) {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])

  useEffect(() => {
    const handleKeyDown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          setCorrectLetters(currentLetters => [...currentLetters, letter]);
        } else {
          //showNotification()
        }

      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters(wrongLetters => [...wrongLetters, letter])
        } else {
          // showNotification()

        }
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);

  }, [correctLetters, wrongLetters, playable])


  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        <Popup />
        <Notification />
      </div>
    </div>
  );
}

export default App;
