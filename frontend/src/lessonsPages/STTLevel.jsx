import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import "../STTLevel.css";

function STTLevel() {
  const location = useLocation();
  const { questions } = location.state || {};

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [hintVisible, setHintVisible] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!questions) {
      window.location.href = "/levels";
    }
  }, [questions]);


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
        { !gameOver &&
          <div className="body">
            <div className="title">
              <h1>Sign to Text</h1>
            </div>
            <h2>What word is spelled below?</h2>
            {answered && (
              <h3 className={correctAnswer ? "correct" : "incorrect"}>
                {correctAnswer ? "Correct!" : "Incorrect, try again!"}
              </h3>
            )}

            <img src={questions[currentQuestion].signImg} height={200} width={900} alt="Question" />
            
            <div className="hint">
              {!hintVisible ? <p onClick={toggleHint}>Click here for a hint</p> : <p onClick={toggleHint}>{questions[currentQuestion].hint}</p>}
            </div>
            
            <input
              type="text"
              value={userAnswer}
              onChange={handleAnswerChange}
              placeholder="Enter answer here.."
            />

            <div className="gameNav">
              <button
                onClick={checkAnswer}
                disabled={answered}
                type="submit"
              >
                Check Answer
              </button>
              
              {correctAnswer && (
                <Link
                  className="nextQuestion"
                  onClick={nextQuestion}
                  disabled={!answered}
                  type="button"
                >
                  Next Question →
                </Link>
              )}
            </div>

            <p>{currentQuestion + 1}/{questions.length} questions completed</p>
          </div>
        }
        
        { gameOver && 
          <div className="gameOver">
            <h2>Game Over</h2>
            <h2>Thanks for playing!</h2>
            <Link className="btn" to="/lessons">BACK TO LESSONS</Link>
          </div>
        }
        
      </div>
    </div>
  );
}

export default STTLevel;