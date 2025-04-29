import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProgressBar from '../components/ProgressBar';
import '../wordsToHands.css';

function wordsToText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correctLetters, setCorrectLetters] = useState([false, false, false]);
  const words = ['CAT', 'RED', 'EAT'];

  const markLetterCorrect = (letterIndex) => {
    const updatedCorrectLetters = [...correctLetters];
    updatedCorrectLetters[letterIndex] = true;
    setCorrectLetters(updatedCorrectLetters);
  };

  const checkAnswer = () => {
    if (correctLetters.every(letter => letter)) {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setCorrectLetters([false, false, false]);
    }
    else {
      alert("not all letters are signed correctly");
    }

  };

  return (
    <div className="bg">
      <Sidebar />
      <div className="content">
        <div className="title">
          <h1>Words to Hands</h1>
        </div>

        <div className='prompt'>
          <h2>Sign the following word.</h2>
        </div>
        <div className="text-box">
          <h2>{words[currentWordIndex]}</h2>
        </div>
        <div className="word-boxes">
          <div
            className={`box1 ${correctLetters[0] ? 'correct' : ''}`}
            onClick={() => markLetterCorrect(0)}
          >
            {words[currentWordIndex][0]}
          </div>
          <div
            className={`box2 ${correctLetters[1] ? 'correct' : ''}`}
            onClick={() => markLetterCorrect(1)}
          >
            {words[currentWordIndex][1]}
          </div>
          <div
            className={`box3 ${correctLetters[2] ? 'correct' : ''}`}
            onClick={() => markLetterCorrect(2)}
          >
            {words[currentWordIndex][2]}
          </div>
        </div>

        <div className="progress-bar">
          <ProgressBar />
        </div>

        <div className="check-sign">
          <button onClick={checkAnswer}>test correctly signed</button>
        </div>
      </div>
    </div>

  );
};

export default wordsToText;