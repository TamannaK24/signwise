import '../Homepage.css'

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
          <a href="/learn">
            <button className="get-started-btn" type="button">Get Started</button>
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default Homepage;
