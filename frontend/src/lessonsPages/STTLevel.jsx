import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useLocation } from 'react-router-dom';
import { CIcon } from '@coreui/icons-react';
import { cilLightbulb } from '@coreui/icons';
import { ImFire } from "react-icons/im";
import { Link } from 'react-router-dom';

import "../STTLevel.css";

function STTLevel() {
  const location = useLocation();
  const questions = location.state?.questions || [];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [hintsUsed, setHintsUsed] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [streak, setStreak] = useState(0);

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
    
    if (answered) {
      setAnswered(false);
    }
  };

  const checkAnswer = () => {
    setAnswered(true);

    if (userAnswer.trim().toLowerCase() === questions[currentQuestion].answer) {
      setCorrectAnswer(true);
      setStreak(prev => prev + 1);
    } 
    
    else {
      setCorrectAnswer(false);
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setUserAnswer("");
      setHintsUsed(0);
      setCorrectAnswer(false);
    }

    else {
      setAnswered(false);
      setGameOver(true);
    }
  };

  const handleUseHint = () => {
    if (hintsUsed < 3) {
      setHintsUsed(prev => prev + 1);
    }
  };

  const renderHints = () => {
    const hintList = questions[currentQuestion].hints || [];
    return hintList.slice(0, hintsUsed).map((hint, index) => (
      <p key={index} className="hint-text">  {hint}&nbsp;&nbsp;&nbsp;&nbsp;</p>
    ));
  };

  return (
    <div className="bg">
      <Sidebar />
      <div className="content">
        <div className="title">
          <h1>Sign To Text</h1>
        </div>
        { !gameOver &&
          <div className="body">
            <div className="leftPanel">
              <h2>What word is spelled below?</h2>
              {answered && (
                <h3 className={correctAnswer ? "correct" : "incorrect"}>
                  {correctAnswer ? "Correct!" : "Incorrect, try again!"}
                </h3>
              )}
              
              <img src={questions[currentQuestion].signImg} height={200} width={900} alt="Question" />
              
              <div className="hint">
                {renderHints()}
              </div>
              
              <input
                type="text"
                value={userAnswer}
                onChange={handleAnswerChange}
                placeholder="Enter answer here.."
              />

              <div className="footer">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
                </div>
                <p >{currentQuestion + 1}/{questions.length} questions completed</p>
              </div>
            </div>


            <div className="rightPanel">
              <div className="widget">
                <p>Remaining Hints</p>
                <div style={{ backgroundColor: 'inherit', display: 'flex', justifyContent: 'center', gap: '1.5rem', margin: '0.5rem' }}>
                  {[...Array(3)].map((_, i) => (
                    <span key={i} style={{ width: '60px', height: '60px' }}>
                      <CIcon icon={cilLightbulb} style={{ backgroundColor: '#545252', color: 'white', padding: '10px', borderRadius: '4px' }} />
                    </span>
                  ))}
                </div>
                <button
                  onClick={handleUseHint}
                  disabled={hintsUsed >= 3}
                  style={{
                    marginTop: '1rem',
                    backgroundColor: hintsUsed >= 3 ? '#888' : '#516B13',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.5rem 1rem',
                    cursor: hintsUsed >= 3 ? 'not-allowed' : 'pointer'
                  }}
                >
                  Use Hint
                </button>
              </div>

              <div className="streak">
                <p>Streak</p>
                <p style={{ gap: '0.5rem'}} ><ImFire style={{ width: '30px', height: '30px', backgroundColor: 'inherit', color: '#6B5F44' }} />{streak}</p>
              </div>

              <div className="gameNav">
                <button
                  onClick={checkAnswer}
                  disabled={answered}
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
            <Link className="btn" to="/sign-to-text">BACK TO LESSONS</Link>
          </div>
        }
        
      </div>
    </div>
  );
}

export default STTLevel;