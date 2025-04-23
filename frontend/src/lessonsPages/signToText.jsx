import React from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
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
import arrow from "../assets/arrow.png"

const levels = [
  { number: 1, status: "Completed", description: "3 Letter Words" },
  { number: 2, status: "Completed", description: "New Letters Added:" },
  { number: 3, status: "Ongoing", description: "New Letters Added:" },
  { number: 4, status: "Locked", description: "New Letters Added:" },
];

const level1 = [
  { signImg: img1, answer: "dog",  hints: ["Starts with an D", "An animal", "Many people have one"] },
  { signImg: img2, answer: "blue", hints: ["It's a color", "Starts with a B", "Fifth color in the rainbow"] },
  { signImg: img3, answer: "skate", hints: ["Ends with an E", "This is an action", "Recently competed in the Olympics"] },
  { signImg: img4, answer: "change", hints: ["This is an action", "Starts with a C", "You do this before leaving the house"] },
  { signImg: img5, answer: "bank", hints: ["This is a place", "You go here to open an account", "Starts with a B"] },
  { signImg: img6, answer: "porch", hints: ["Ends with an H", "Outside a house", "This is a place"] },
  { signImg: img7, answer: "guide", hints: ["Means to assist or lead someone", "Can be a verb or a noun", "Starts with G"] },
  { signImg: img8, answer: "yard", hints: ["Starts with an Y", "Large area outside house", "Most people in Texas have one"] },
  { signImg: img9, answer: "zebra", hints: ["This is an animal", "It's black and white", "More visited in a zoo"] },
  { signImg: img10, answer: "equip", hints: ["This is an action", "Starts with an E", "To pick up something"] },
];

const level2 = [
  { signImg: img1, answer: "dog",  hints: ["Starts with an D", "An animal", "Many people have one"] },
  { signImg: img2, answer: "blue", hints: ["It's a color", "Starts with a B", "Fifth color in the rainbow"] },
  { signImg: img3, answer: "skate", hints: ["Ends with an E", "This is an action", "Recently competed in the Olympics"] },
  { signImg: img4, answer: "change", hints: ["This is an action", "Starts with a C", "You do this before leaving the house"] },
  { signImg: img5, answer: "bank", hints: ["This is a place", "You go here to open an account", "Starts with a B"] },
  { signImg: img6, answer: "porch", hints: ["Ends with an E", "An animal", "Many people have one"] },
  { signImg: img7, answer: "guide", hints: ["Means to assist", "An animal", "Many people have one"] },
  { signImg: img8, answer: "yard", hints: ["Starts with an Y", "An animal", "Many people have one"] },
  { signImg: img9, answer: "zebra", hints: ["This is an animal", "An animal", "Many people have one"] },
  { signImg: img10, answer: "equip", hints: ["This is an action", "An animal", "Many people have one"] },
];

const level3 = [
  { signImg: img1, answer: "dog",  hints: ["Starts with an D", "An animal", "Many people have one"] },
  { signImg: img2, answer: "blue", hints: ["It's a color", "Starts with a B", "Fifth color in the rainbow"] },
  { signImg: img3, answer: "skate", hints: ["Ends with an E", "This is an action", "Recently competed in the Olympics"] },
  { signImg: img4, answer: "change", hints: ["This is an action", "Starts with a C", "You do this before leaving the house"] },
  { signImg: img5, answer: "bank", hints: ["This is a place", "You go here to open an account", "Starts with a B"] },
  { signImg: img6, answer: "porch", hints: ["Ends with an E", "An animal", "Many people have one"] },
  { signImg: img7, answer: "guide", hints: ["Means to assist", "An animal", "Many people have one"] },
  { signImg: img8, answer: "yard", hints: ["Starts with an Y", "An animal", "Many people have one"] },
  { signImg: img9, answer: "zebra", hints: ["This is an animal", "An animal", "Many people have one"] },
  { signImg: img10, answer: "equip", hints: ["This is an action", "An animal", "Many people have one"] },
];

const level4 = [
  { signImg: img1, answer: "dog",  hints: ["Starts with an D", "An animal", "Many people have one"] },
  { signImg: img2, answer: "blue", hints: ["It's a color", "Starts with a B", "Fifth color in the rainbow"] },
  { signImg: img3, answer: "skate", hints: ["Ends with an E", "This is an action", "Recently competed in the Olympics"] },
  { signImg: img4, answer: "change", hints: ["This is an action", "Starts with a C", "You do this before leaving the house"] },
  { signImg: img5, answer: "bank", hints: ["This is a place", "You go here to open an account", "Starts with a B"] },
  { signImg: img6, answer: "porch", hints: ["Ends with an E", "An animal", "Many people have one"] },
  { signImg: img7, answer: "guide", hints: ["Means to assist", "An animal", "Many people have one"] },
  { signImg: img8, answer: "yard", hints: ["Starts with an Y", "An animal", "Many people have one"] },
  { signImg: img9, answer: "zebra", hints: ["This is an animal", "An animal", "Many people have one"] },
  { signImg: img10, answer: "equip", hints: ["This is an action", "An animal", "Many people have one"] },
];


function SignToText() {
  const navigate = useNavigate();

  const handleLevelClick = (levelNum) => {
    let selectedLevel;
    switch (levelNum) {
      case 1: selectedLevel = level1; break;
      case 2: selectedLevel = level2; break;
      case 3: selectedLevel = level3; break;
      case 4: selectedLevel = level4; break;
      default: selectedLevel = []; break;
    }

    navigate('/sign-to-text/level', { state: { questions: selectedLevel } });
  };
  
  return (
    <div className="bg">
      <Sidebar />
      <div className="content">
        <div className="title">
          <h1>Sign To Text</h1>
        </div>

        <div className="progress-bar">
          <p>2/4 Levels Completed</p>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: '50%' }}></div>
          </div>
        </div>
        
        <div className="level-grid">
          {levels.map((level, index) => (
            <div
              key={index}
              className={`level-card ${level.status.toLowerCase()}`}
              onClick={() => level.status !== "Locked" && handleLevelClick(level.number)}
            >
              <div className="level-header">
                <h2>{`Level ${level.number}`}</h2>
                <span className={`badge ${level.status}`}>{level.status}</span>
              </div>
              <p className="level-desc">{level.description}</p>
              <div className="level-footer">
                <span>{level.status === "Locked"  ? "Begin" : "Learn"}</span>
                <span>{level.status === "Locked" ? "🔒" : <img height={40} src={arrow} />}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  }

  export default SignToText;