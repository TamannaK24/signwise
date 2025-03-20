import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Homepage from "./pages/Homepage";
import Learn from "./pages/Learn";
import Features from "./pages/Features";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Goals from "./pages/Goals";
import Lessons from "./pages/Lessons";
import Settings from "./pages/Settings";

import GuidedHands from './lessonsPages/guidedHands';
import FingerSpellFocus from './lessonsPages/fingerSpellFocus';
import WordsToText from './lessonsPages/wordsToText';
import SignToHands from './lessonsPages/signToHands';

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
          <Route path="/log-in" element={<Login />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/settings" element={<Settings />} />

          {/* Lesson pages */}
          <Route path="/guided-hands" element={<GuidedHands />} />
          <Route path="/finger-spell-focus" element={<FingerSpellFocus />} />
          <Route path="/words-to-text" element={<WordsToText />} />
          <Route path="/sign-to-hands" element={<SignToHands />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
