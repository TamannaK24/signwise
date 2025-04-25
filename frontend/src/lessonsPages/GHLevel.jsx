import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useLocation } from 'react-router-dom';
import { ImFire } from "react-icons/im";
import YouTubeEmbed from "../components/YouTubeEmbed";
import { Link } from 'react-router-dom';

import "../GHLevel.css";

function GHLevel() {
  const location = useLocation();
  const questions = location.state?.questions || [];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setCorrectAnswer(false);
    }

    else {
      setAnswered(false);
      setGameOver(true);
    }
  };

  return (
    <div className="bg">
      <Sidebar />
      <div className="content">
        <div className="title">
          <h1>Guided Hands</h1>
        </div>
        { !gameOver &&
          <div className="body">
            <div className="leftPanel">
              <h2>Sign the letter below.</h2>
              {answered && (
                <h3 className={correctAnswer ? "correct" : "incorrect"}>
                  {correctAnswer ? "Correct!" : "Incorrect, try again!"}
                </h3>
              )}
              
              <div className="video">
                <YouTubeEmbed startTime={questions[currentQuestion].start} endTime={questions[currentQuestion].end} />
              </div>

              <div className="footer">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
                </div>
                <p >{currentQuestion + 1}/{questions.length} questions completed</p>
              </div>
            </div>


            <div className="rightPanel">
              <div className="streak">
                <p>Streak</p>
                <p style={{ gap: '0.5rem'}} ><ImFire style={{ width: '30px', height: '30px', backgroundColor: 'inherit', color: '#6B5F44' }} />5</p>
              </div>

              <div className="gameNav">
                <button
                  onClick={nextQuestion}
                  //disabled={answered}
                  type="submit"
                >
                  Check Answer
                </button>
              </div>
              
              {correctAnswer && (
                <button
                  className="nextQuestion"
                  onClick={nextQuestion}
                  disabled={!answered}
                  type="button"
                >
                  Next Question →
                </button>
              )}
            </div>
          </div>
        }
        
        { gameOver && 
          <div className="gameOver">
            <h2>Game Over</h2>
            <h2>Thanks for playing!</h2>
            <Link className="btn" to="/guided-hands">BACK TO LESSONS</Link>
          </div>
        }
        
      </div>
    </div>
  );
}

export default GHLevel;