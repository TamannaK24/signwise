import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ProgressBar from '../components/ProgressBar';
import '../wordsToHands.css';

function WordsToText() {
  const words = ['CAT', 'RED', 'EAT'];

  // Game state
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correctLetters, setCorrectLetters] = useState([false, false, false]);

  // Streaming letters state
  const [currentLetter, setCurrentLetter] = useState('');
  const [lettersHistory, setLettersHistory] = useState([]);

  const markLetterCorrect = (letterIndex) => {
    setCorrectLetters(prev => {
      const next = [...prev];
      next[letterIndex] = true;
      return next;
    });
  };

  const checkAnswer = () => {
    if (correctLetters.every(Boolean)) {
      setCurrentWordIndex(i => (i + 1) % words.length);
      setCorrectLetters([false, false, false]);
    } else {
      alert("Not all letters are signed correctly");
    }
  };

  // Poll backend for latest letter
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch('http://localhost:4000/api/latest-letter');
        const { letter } = await res.json();
        if (letter) {
          setCurrentLetter(letter);
          setLettersHistory(prev => {
            if (prev[prev.length - 1] === letter) return prev;
            return [...prev, letter];
          });
        }
      } catch (err) {
        console.error('Error fetching latest letter:', err);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const word = words[currentWordIndex];

  return (
    <div className="goals-bg">
      <Sidebar />
      <div className="wth-content">
        <div className="goals-title">
          <h1>Words to Hands</h1>
        </div>

        <div className="words-to-txt-container">
          <div className="prompt">
            <h2>Sign the following word:</h2>
          </div>

          <div className="text-box">
            <h2>{word}</h2>
          </div>

          <div className="word-boxes">
            {word.split('').map((ch, i) => (
              <div
                key={i}
                className={`box${i + 1} ${correctLetters[i] ? 'correct' : ''}`}
                onClick={() => markLetterCorrect(i)}
              >
                {ch}
              </div>
            ))}
          </div>

          <div className="progress-bar">
            <ProgressBar />
          </div>

          <div className="check-sign">
            <button onClick={checkAnswer}>Test</button>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3>Latest Detected Letter:</h3>
            <p style={{ fontSize: '2rem' }}>
              {currentLetter || '—'}
            </p>

            <h4>History:</h4>
            <p>
              {lettersHistory.length > 0
                ? lettersHistory.join(', ')
                : 'No letters detected yet.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordsToText;
