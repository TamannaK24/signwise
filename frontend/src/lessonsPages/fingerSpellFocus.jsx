import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { ImFire } from "react-icons/im";
import { Link } from 'react-router-dom';

import "../GHLevel.css";

function FingerSpellFocus() {
  const questions = [
    { letter: 'A' },
    { letter: 'B' },
    { letter: 'C' },
    { letter: 'D' }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [letterCorrect, setLetterCorrect] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const markLetterCorrect = () => {
    setLetterCorrect(true);
  };

  const checkAnswer = () => {
    if (letterCorrect) {
      setCorrectAnswer(true);
      setAnswered(true);
    } else {
      setCorrectAnswer(false);
      setAnswered(true);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setCorrectAnswer(false);
      setLetterCorrect(false);
    } else {
      setAnswered(false);
      setGameOver(true);
    }
  };

  return (
    <div className="bg">
      <Sidebar />
      <div className="content">
        <div className="title">
          <h1>Finger Spell Focus</h1>
        </div>

        {!gameOver &&
          <div className="body">
            <div className="leftPanel">
              <h2>Sign the letter below.</h2>
              {answered && (
                <h3 className={correctAnswer ? "correct" : "incorrect"}>
                  {correctAnswer ? "Correct!" : "Incorrect, try again!"}
                </h3>
              )}

              <div className="letter-display">
                <div
                  className={`letter-box ${letterCorrect ? 'correct2' : ''}`}
                  onClick={markLetterCorrect}
                >
                  <h1>{questions[currentQuestion].letter}</h1>
                </div>
              </div>

              <div className="footer">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
                </div>
                <p>{currentQuestion + 1}/{questions.length} questions completed</p>
              </div>
            </div>

            <div className="rightPanel">
              <div className="streak">
                <p>Streak</p>
                <p style={{ gap: '0.5rem' }}>
                  <ImFire style={{ width: '30px', height: '30px', backgroundColor: 'inherit', color: '#6B5F44' }} />5
                </p>
              </div>

              <div className="gameNav">
                <button
                  onClick={checkAnswer}
                  type="submit"
                >
                  Check Answer
                </button>
              </div>

              {answered && (
                <button
                  className="nextQuestion"
                  onClick={nextQuestion}
                  type="button"
                >
                  Next Question →
                </button>
              )}
            </div>
          </div>
        }

        {gameOver &&
          <div className="gameOver">
            <h2>Game Over</h2>
            <h2>Thanks for playing!</h2>
            <Link className="btn" to="/FSFLevelMenu">BACK TO LESSONS</Link>
          </div>
        }

      </div>
    </div>
  );
}

export default FingerSpellFocus;
