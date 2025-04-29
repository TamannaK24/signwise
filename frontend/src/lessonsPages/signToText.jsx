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
import img11 from "../assets/question11.png";
import img12 from "../assets/question12.png";
import img13 from "../assets/question13.png";
import img14 from "../assets/question14.png";
import img15 from "../assets/question15.png";
import img16 from "../assets/question16.png";
import img17 from "../assets/question17.png";
import img18 from "../assets/question18.png";
import img19 from "../assets/question19.png";
import img20 from "../assets/question20.png";
import img21 from "../assets/question21.png";
import img22 from "../assets/question22.png";
import img23 from "../assets/question23.png";
import img24 from "../assets/question24.png";
import img25 from "../assets/question25.png";
import img26 from "../assets/question26.png";
import img27 from "../assets/question27.png";
import img28 from "../assets/question28.png";
import img29 from "../assets/question29.png";
import img30 from "../assets/question30.png";
import img31 from "../assets/question31.png";
import img32 from "../assets/question32.png";
import img33 from "../assets/question33.png";
import img34 from "../assets/question34.png";
import img35 from "../assets/question35.png";

import arrow from "../assets/arrow.png"

const levels = [
  { number: 1, status: "Completed", description: "Simple Words (3-4 Letters)" },
  { number: 2, status: "Completed", description: "Intermediate Words (5 Letters)" },
  { number: 3, status: "Ongoing", description: "Advanced Words" },
  { number: 4, status: "Locked", description: "Complex Words" },
];

const level1 = [
  { signImg: img1, answer: "dog", hints: ["Starts with a D", "An animal", "Many people have one"] },
  { signImg: img2, answer: "blue", hints: ["It's a color", "Starts with a B", "Fifth color in the rainbow"] },
  { signImg: img3, answer: "cat", hints: ["Starts with a C", "Purrs and meows", "Loves napping"] },
  { signImg: img4, answer: "sun", hints: ["Found in the sky", "Very hot", "Rises every morning"] },
  { signImg: img5, answer: "bank", hints: ["This is a place", "You go here to open an account", "Starts with a B"] },
  { signImg: img6, answer: "cup", hints: ["Used for drinking", "Usually has a handle", "Often ceramic or plastic"] },
  { signImg: img7, answer: "hat", hints: ["Worn on your head", "Often used for style or shade", "Rhymes with 'bat'"] },
  { signImg: img8, answer: "yard", hints: ["Starts with a Y", "Large area outside house", "Most people in Texas have one"] },
  { signImg: img9, answer: "pen", hints: ["Used to write", "Has ink", "Held in your hand"] },
  { signImg: img10, answer: "box", hints: ["Used for storage", "Often cardboard", "Has corners and edges"] },
];

const level2 = [
  { signImg: img11, answer: "apple", hints: ["This is a fruit", "Often red or green", "Keeps the doctor away"] },
  { signImg: img12, answer: "chair", hints: ["You sit on it", "Has legs", "Found at a table"] },
  { signImg: img13, answer: "guide", hints: ["Means to assist or lead someone", "Can be a verb or a noun", "Starts with G"] },
  { signImg: img14, answer: "brush", hints: ["Used for hair or teeth", "Has bristles", "You hold it"] },
  { signImg: img15, answer: "zebra", hints: ["This is an animal", "It's black and white", "More visited in a zoo"] },
  { signImg: img16, answer: "water", hints: ["Essential to life", "Clear and drinkable", "Covers most of the Earth"] },
  { signImg: img17, answer: "porch", hints: ["Ends with an H", "Outside a house", "This is a place"] },
  { signImg: img18, answer: "table", hints: ["Has four legs", "You eat or work on it", "Found in dining rooms"] },
  { signImg: img19, answer: "phone", hints: ["Used to call", "Has apps", "Always in your pocket"] },
  { signImg: img20, answer: "bread", hints: ["Eaten with butter", "Used in sandwiches", "Found at bakeries"] },
];

const level3 = [
  { signImg: img21, answer: "skate", hints: ["Ends with an E", "This is an action", "Recently competed in the Olympics"] },
  { signImg: img22, answer: "change", hints: ["This is an action", "Starts with a C", "You do this before leaving the house"] },
  { signImg: img23, answer: "equip", hints: ["This is an action", "Starts with an E", "To pick up something"] },
  { signImg: img24, answer: "travel", hints: ["You do this on vacation", "Can involve planes or trains", "Starts with a T"] },
  { signImg: img25, answer: "purple", hints: ["This is a color", "Mix of blue and red", "Starts with a P"] },
  { signImg: img26, answer: "monkey", hints: ["An animal", "Loves bananas", "Swings from trees"] },
  { signImg: img27, answer: "doctor", hints: ["Helps you feel better", "Wears a stethoscope", "Found in hospitals"] },
  { signImg: img28, answer: "school", hints: ["Place for learning", "Has teachers", "Students go here"] },
  { signImg: img29, answer: "forest", hints: ["Group of trees", "Home to animals", "Very green"] },
  { signImg: img30, answer: "family", hints: ["People you live with", "Related to you", "Parents, siblings, etc."] },
];

const level4 = [
  { signImg: img31, answer: "celebrate", hints: ["Happens on birthdays", "Full of joy and fun", "Involves parties"] },
  { signImg: img32, answer: "knowledge", hints: ["What you gain in school", "Starts with a K", "Power for your mind"] },
  { signImg: img33, answer: "adventure", hints: ["Exciting experience", "Often in stories", "Involves exploring"] },
  { signImg: img34, answer: "butterfly", hints: ["An insect", "Very colorful wings", "Starts as a caterpillar"] },
  { signImg: img35, answer: "discovery", hints: ["Finding something new", "Often scientific", "Starts with a D"] },
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