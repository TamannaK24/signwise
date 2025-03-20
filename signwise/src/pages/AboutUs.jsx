import { Link } from 'react-router-dom';
import './AboutUs.css'

function AboutUs() {

    return (
      <>
      <div className="row">
        <h1>About Us</h1>
        <div className="column">
          <h2>Clear</h2>
          <p>Many ASL tools struggle with reading correct signs, 
            leading to ambiguity. Our advanced model refines translations
             to create an easy learning experience, making ASL learning more 
             intuitive and reliable.</p>
        </div>
        <div className="column">
        <h2>Bridging the Gap</h2>
          <p>Unlike other solutions that may lack responsiveness or structured 
            content, our comprehensive curriculum helps users grasp ASL more effectively
             while understanding its nuances.</p>
        </div>
        <div className="column">
        <h2>Accessible</h2>
          <p>By offering this tool free of cost to diverse demographics and multiple 
            language users, we aim to break down communication barriers and promote ASL 
            awareness.</p>
        </div>
      </div>
      <div className="learn-btn">
        <Link to="/features" className="nav-item">Learn More</Link>
      </div>
      </>
    );
  };
  
  export default AboutUs;