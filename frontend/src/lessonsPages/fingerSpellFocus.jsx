import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../wordsToHands.css';
import '../STTLevel.css';
import { CIcon } from '@coreui/icons-react';
import { cilLightbulb } from '@coreui/icons';
import { ImFire } from "react-icons/im";

function FingerSpellFocus() {
  const words = ['A', 'B', 'C', 'D'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const totalQuestions = words.length;

  const markLetterCorrect = () => {
    setIsCorrect(true);
  };

  const checkAnswer = () => {
    if (isCorrect) {
      const nextWordIndex = currentWordIndex + 1;

      if (nextWordIndex >= totalQuestions) {
        alert('All letters completed!');
        setCurrentWordIndex(0); // reset if desired
      } else {
        setCurrentWordIndex(nextWordIndex);
      }

      setIsCorrect(false);
    } else {
      alert("Sign the letter correctly first.");
    }
  };

  const progressPercent = ((currentWordIndex) / totalQuestions) * 100;

  return (
    <div className="goals-bg">
      <Sidebar />
      <div className="wth-content">
        <div className="goals-title">
          <h1>Finger Spell Focus</h1>
        </div>
    <div className="fsf-over">
        <div className="finger-spell-focus-container">
          <div className="prompt">
            <h2>Sign the following letter.</h2>
          </div>

          <div className="letter-box">
            <div
              className={`letter-box1 ${isCorrect ? 'correct' : ''}`}
              onClick={markLetterCorrect}
            >
              {words[currentWordIndex]}
            </div>
          </div>

          <div className="footer">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <p>{currentWordIndex}/{totalQuestions} letters completed</p>
          </div>

              <div className="rightPanel">

                <div className="streak">
                  <p>Streak</p>
                  <p style={{ gap: '0.5rem'}} ><ImFire style={{ width: '30px', height: '30px', backgroundColor: 'inherit', color: '#6B5F44' }} />5</p>
                </div>

                <div className="check-sign">
                  <button onClick={checkAnswer}>test correctly signed</button>
                </div>
              </div>


        </div>
        </div>
      </div>
    </div>
  );
}

export default FingerSpellFocus;
