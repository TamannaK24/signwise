import React from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import "../guidedHands.css";

import arrow from '../assets/arrow.png';


const levels = [
  { number: 1, status: "Completed", description: "3 Letter Words" },
  { number: 2, status: "Completed", description: "New Letters Added:" },
  { number: 3, status: "Ongoing", description: "New Letters Added:" },
  { number: 4, status: "Locked", description: "New Letters Added:" },
];

const level1 = [
  { video: 206, answer: "H" },
  { video: 128, answer: "F" },
  { video: 92, answer: "C" },
  { video: 66, answer: "A" },
  { video: 114, answer: "E" },
  { video: 81, answer: "B" },
  { video: 193, answer: "G" },
  { video: 101, answer: "D" },
  { video: 225, answer: "J" },
  { video: 215, answer: "I" },
];

const level2 = [
  { video: 206, answer: "H" },
  { video: 128, answer: "F" },
  { video: 92, answer: "C" },
  { video: 66, answer: "A" },
  { video: 114, answer: "E" },
  { video: 81, answer: "B" },
  { video: 193, answer: "G" },
  { video: 101, answer: "D" },
  { video: 225, answer: "J" },
  { video: 215, answer: "I" },
];

const level3 = [
  { video: 206, answer: "H" },
  { video: 128, answer: "F" },
  { video: 92, answer: "C" },
  { video: 66, answer: "A" },
  { video: 114, answer: "E" },
  { video: 81, answer: "B" },
  { video: 193, answer: "G" },
  { video: 101, answer: "D" },
  { video: 225, answer: "J" },
  { video: 215, answer: "I" },
];

const level4 = [
  { video: 206, answer: "H" },
  { video: 128, answer: "F" },
  { video: 92, answer: "C" },
  { video: 66, answer: "A" },
  { video: 114, answer: "E" },
  { video: 81, answer: "B" },
  { video: 193, answer: "G" },
  { video: 101, answer: "D" },
  { video: 225, answer: "J" },
  { video: 215, answer: "I" },
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