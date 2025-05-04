import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="nav">
      <Link to="/" className="site-title">SignWise</Link>
      <ul>
          <li><Link to="/learn" className="nav-item">Learn</Link></li>
          <li><Link to="/features" className="nav-item">Features</Link></li>
          <li><Link to="/about-us" className="nav-item">About Us</Link></li>
          <li><Link to="/contact" className="nav-item">Contact</Link></li>
          <li><Link to="/login" className="login-btn">Log In</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;