import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useLocation } from 'react-router-dom';
import { CIcon } from '@coreui/icons-react';
import { cilLightbulb } from '@coreui/icons';
import { ImFire } from "react-icons/im";

import "../STTLevel.css";

function STTLevel() {
  const location = useLocation();
  const questions = location.state?.questions || [];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [hintVisible, setHintVisible] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [gameOver, setGameOver] = useState(false);

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
    } 
    
    else {
      setCorrectAnswer(false);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setUserAnswer("");
      setHintVisible(false);
      setCorrectAnswer(false);
    }

    else {
      setAnswered(false);
      setGameOver(true);
    }
  };

  const toggleHint = () => {
    setHintVisible(!hintVisible);
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
                {!hintVisible ? "" : <p onClick={toggleHint}>{questions[currentQuestion].hint}</p>}
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
                    <span key={i} style={{ width: '60px', height: '60px' }}><CIcon icon={cilLightbulb} style={{ backgroundColor: '#545252', color: 'white', padding: '10px', borderRadius: '4px' }} /></span>
                  ))}
                </div>
                <button onClick={toggleHint} style={{ marginTop: '1rem', backgroundColor: '#516B13', color: 'white', border: 'none', borderRadius: '8px', padding: '0.5rem 1rem' }}>
                  Use Hint
                </button>
              </div>

              <div className="streak">
                <p>Streak</p>
                <p style={{ gap: '0.5rem'}} ><ImFire style={{ width: '30px', height: '30px', backgroundColor: 'inherit', color: '#6B5F44' }} />5</p>
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