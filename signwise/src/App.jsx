import './App.css'

import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import Learn from "./pages/Learn";
import Features from "./pages/Features";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";

import { Routes, Route } from 'react-router-dom'

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
          <Route path="/log-in" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
