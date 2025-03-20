import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer className="footer">
      <Link to="/" className="site-title">SignWise</Link>
      <ul>
          <li><Link to="/contact" className="nav-item">Contact</Link></li>
          <li><Link to="/features" className="nav-item">Features</Link></li>
          <li><Link to="/about-us" className="nav-item">About Us</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;