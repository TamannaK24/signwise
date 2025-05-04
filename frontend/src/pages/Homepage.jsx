import '../Homepage.css'
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-text">
        <div className="text-section">
          <p>SignWise</p>
          <p>Your ASL Learning</p>
          <p>Companion</p>
        </div>
        <div className="button-section">
          <Link to="/SignUp">
            <button className="get-started-btn" type="button">Get Started</button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Homepage;
