import React from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import "../guidedHands.css";

import arrow from '../assets/arrow.png';


const levels = [
  { number: 1, status: "Completed", description: "A-J" },
  { number: 2, status: "Completed", description: "K-S" },
  { number: 3, status: "Ongoing", description: "T-Z" },
  { number: 4, status: "Locked", description: "Complete Alphabet" },
];

const level1 = [
  { start: 206, end: 214, answer: "H" },
  { start: 129, end: 142, answer: "F" },
  { start: 92, end: 100, answer: "C" },
  { start: 66, end: 80, answer: "A" },
  { start: 115, end: 127, answer: "E" },
  { start: 82, end: 91, answer: "B" },
  { start: 193, end: 205, answer: "G" },
  { start: 102, end: 113, answer: "D" },
  { start: 226, end: 234, answer: "J" },
  { start: 216, end: 224, answer: "I" },
];

const level2 = [
  { start: 317, end: 329, answer: "N" },
  { start: 236, end: 252, answer: "K" },
  { start: 338, end: 350, answer: "P" },
  { start: 432, end: 443, answer: "T" },
  { start: 253, end: 261, answer: "L" },
  { start: 303, end: 316, answer: "M" },
  { start: 351, end: 362, answer: "Q" },
  { start: 376, end: 431, answer: "S" },
  { start: 363, end: 376, answer: "R" },
  { start: 329, end: 338, answer: "O" },
];

const level3 = [
  { start: 468, end: 489, answer: "X" },
  { start: 449, end: 458, answer: "V" },
  { start: 499, end: 510, answer: "Z" },
  { start: 443, end: 448, answer: "U" },
  { start: 490, end: 499, answer: "Y" },
  { start: 458, end: 467, answer: "W" },
];

const level4 = [
  { start: 206, end: 215, answer: "H" },
  { start: 129, end: 142, answer: "F" },
  { start: 92, end: 100, answer: "C" },
  { start: 66, end: 80, answer: "A" },
  { start: 115, end: 127, answer: "E" },
  { start: 82, end: 91, answer: "B" },
  { start: 193, end: 205, answer: "G" },
  { start: 102, end: 113, answer: "D" },
  { start: 226, end: 234, answer: "J" },
  { start: 216, end: 224, answer: "I" },
  { start: 316, end: 329, answer: "N" },
  { start: 235, end: 252, answer: "K" },
  { start: 338, end: 350, answer: "P" },
  { start: 432, end: 443, answer: "T" },
  { start: 253, end: 261, answer: "L" },
  { start: 468, end: 489, answer: "X" },
  { start: 449, end: 458, answer: "V" },
  { start: 499, end: 510, answer: "Z" },
  { start: 443, end: 448, answer: "U" },
  { start: 490, end: 499, answer: "Y" },
  { start: 458, end: 467, answer: "W" },
  { start: 303, end: 316, answer: "M" },
  { start: 351, end: 362, answer: "Q" },
  { start: 376, end: 431, answer: "S" },
  { start: 363, end: 376, answer: "R" },
  { start: 329, end: 338, answer: "O" },
];


function GuidedHands() {
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

    navigate('/guided-hands/level', { state: { questions: selectedLevel } });
  };
  
  return (
    <div className="bg">
      <Sidebar />
      <div className="content">
        <div className="title">
          <h1>Guided Hands</h1>
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

  export default GuidedHands;