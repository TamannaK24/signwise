import { useState } from 'react';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProgressBar from '../components/ProgressBar';
import '../wordsToHands.css';
import ProgressBar from '../components/ProgressBar';
import '../wordsToHands.css';

function WordsToText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correctLetters, setCorrectLetters] = useState([false, false, false]);
  const [currentExpectedLetterIndex, setCurrentExpectedLetterIndex] = useState(0);
  const words = ['CAT', 'RED', 'EAT'];

  const markLetterCorrect = (letterIndex) => {
    if (letterIndex === currentExpectedLetterIndex) {
      const updatedCorrectLetters = [...correctLetters];
      updatedCorrectLetters[letterIndex] = true;
      setCorrectLetters(updatedCorrectLetters);
      setCurrentExpectedLetterIndex((prev) => prev + 1);
    } else {
      alert(`Please sign the letter "${words[currentWordIndex][currentExpectedLetterIndex]}" next.`);
    }
  };

  const checkAnswer = () => {
    if (correctLetters.every(letter => letter)) {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setCorrectLetters([false, false, false]);
      setCurrentExpectedLetterIndex(0);
    } else {
      alert("Not all letters are signed correctly.");
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
          {words[currentWordIndex].split('').map((letter, index) => (
            <div
              key={index}
              className={`box${index + 1} ${correctLetters[index] ? 'correct' : ''}`}
              onClick={() => markLetterCorrect(index)}
            >
              {letter}
            </div>
          ))}
        </div>

        <div className="progress-bar">
          <ProgressBar />
        </div>

        <div className="check-sign">
          <button onClick={checkAnswer}>Test Correctly Signed</button>
        </div>
      </div>
    </div>
  );
}

export default WordsToText;
