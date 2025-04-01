import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import "../signToText.css";

import img1 from "../assets/question1.png";
import img2 from "../assets/question2.png";
import img3 from "../assets/question3.png";
import img4 from "../assets/question4.png";
import img5 from "../assets/question5.png";
import img6 from "../assets/question6.png";
import img7 from "../assets/question7.png";
import img8 from "../assets/question8.png";
import img9 from "../assets/question9.png";
import img10 from "../assets/question10.png";

const questions = [
  {
    signImg: img1,
    answer: "dog",
    hint: "Begins with S",
  },
  {
    signImg: img2,
    answer: "blue",
    hint: "It's a color",
  },
  {
    signImg: img3,
    answer: "skate",
    hint: "Ends with E",
  },
  {
    signImg: img4,
    answer: "change",
    hint: "This is an action",
  },
  {
    signImg: img5,
    answer: "bank",
    hint: "This is a place",
  },
  {
    signImg: img6,
    answer: "porch",
    hint: "Ends with H",
  },
  {
    signImg: img7,
    answer: "guide",
    hint: "Means 'to assist'",
  },
  {
    signImg: img8,
    answer: "yard",
    hint: "Starts with Y",
  },
  {
    signImg: img9,
    answer: "zebra",
    hint: "This is an animal",
  },
  {
    signImg: img10,
    answer: "equip",
    hint: "This is an action",
  },
];

function SignToText() {
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

            <p>Question {currentQuestion + 1} of {questions.length}</p>
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

export default SignToText;