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
  { number: 1, status: "Completed", description: "Letters: A B C D" },
  { number: 2, status: "Completed", description: "New Letters Added: E F" },
  { number: 3, status: "Ongoing", description: "New Letters Added: G H" },
  { number: 4, status: "Locked", description: "New Letters Added: I J K" },
];

const level1 = [
  { signImg: img1, answer: "dog", hint: "Begins with D" },
  { signImg: img2, answer: "blue", hint: "It's a color" },
  { signImg: img3, answer: "skate", hint: "Ends with E" },
  { signImg: img4, answer: "change", hint: "This is an action" },
  { signImg: img5, answer: "bank", hint: "This is a place" },
  { signImg: img6, answer: "porch", hint: "Ends with H" },
  { signImg: img7, answer: "guide", hint: "Means 'to assist'" },
  { signImg: img8, answer: "yard", hint: "Starts with Y" },
  { signImg: img9, answer: "zebra", hint: "This is an animal" },
  { signImg: img10, answer: "equip", hint: "This is an action" },
];

const level2 = [
  { signImg: img1, answer: "dog", hint: "Begins with D" },
  { signImg: img2, answer: "blue", hint: "It's a color" },
  { signImg: img3, answer: "skate", hint: "Ends with E" },
  { signImg: img4, answer: "change", hint: "This is an action" },
  { signImg: img5, answer: "bank", hint: "This is a place" },
  { signImg: img6, answer: "porch", hint: "Ends with H" },
  { signImg: img7, answer: "guide", hint: "Means 'to assist'" },
  { signImg: img8, answer: "yard", hint: "Starts with Y" },
  { signImg: img9, answer: "zebra", hint: "This is an animal" },
  { signImg: img10, answer: "equip", hint: "This is an action" },
];

const level3 = [
  { signImg: img1, answer: "dog", hint: "Begins with D" },
  { signImg: img2, answer: "blue", hint: "It's a color" },
  { signImg: img3, answer: "skate", hint: "Ends with E" },
  { signImg: img4, answer: "change", hint: "This is an action" },
  { signImg: img5, answer: "bank", hint: "This is a place" },
  { signImg: img6, answer: "porch", hint: "Ends with H" },
  { signImg: img7, answer: "guide", hint: "Means 'to assist'" },
  { signImg: img8, answer: "yard", hint: "Starts with Y" },
  { signImg: img9, answer: "zebra", hint: "This is an animal" },
  { signImg: img10, answer: "equip", hint: "This is an action" },
];

const level4 = [
  { signImg: img1, answer: "dog", hint: "Begins with D" },
  { signImg: img2, answer: "blue", hint: "It's a color" },
  { signImg: img3, answer: "skate", hint: "Ends with E" },
  { signImg: img4, answer: "change", hint: "This is an action" },
  { signImg: img5, answer: "bank", hint: "This is a place" },
  { signImg: img6, answer: "porch", hint: "Ends with H" },
  { signImg: img7, answer: "guide", hint: "Means 'to assist'" },
  { signImg: img8, answer: "yard", hint: "Starts with Y" },
  { signImg: img9, answer: "zebra", hint: "This is an animal" },
  { signImg: img10, answer: "equip", hint: "This is an action" },
];


function FSFLevelMenu() {
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

    navigate('/finger-spell-focus', { state: { questions: selectedLevel } });
  };
  
  return (
    <div className="bg">
      <Sidebar />
      <div className="content">
        <div className="title">
          <h1>Finger Spell Focus</h1>
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

  export default FSFLevelMenu;