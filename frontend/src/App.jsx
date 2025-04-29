import './App.css';

import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import Learn from "./pages/Learn";
import Features from "./pages/Features";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contact from './pages/Contact';
import Goals from "./pages/Goals";
import Lessons from "./pages/Lessons";
import Settings from "./pages/Settings";

import GHLevelMenu from './lessonsPages/GHLevelMenu';
import GuidedHands from './lessonsPages/guidedHands';
import FSFLevelMenu from './lessonsPages/FSFLevelMenu';
import FingerSpellFocus from './lessonsPages/fingerSpellFocus';
import WTHLevelMenu from './lessonsPages/WTHLevelMenu';
import WordsToText from './lessonsPages/wordsToText';
import SignToText from './lessonsPages/signToText';
import STTLevel from './lessonsPages/STTLevel';


import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/settings" element={<Settings />} />

          {/* Lesson pages */}
          <Route path="/GHLevelMenu" element={<GHLevelMenu />} />
          <Route path="/guided-hands" element={<GuidedHands />} />
          <Route path="/FSFLevelMenu" element={<FSFLevelMenu />} />
          <Route path="/finger-spell-focus" element={<FingerSpellFocus />} />
          <Route path="/WTHLevelMenu" element={<WTHLevelMenu />} />
          <Route path="/words-to-text" element={<WordsToText />} />
          <Route path="/sign-to-text" element={<SignToText />} />
          <Route path="/sign-to-text/level" element={<STTLevel />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
