import './App.css'

import Navbar from './components/Navbar';
import Homepage from "./pages/Homepage";
import Learn from "./pages/Learn";
import Features from "./pages/Features";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Contact from './pages/Contact';
import Footer from './components/Footer'

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
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
