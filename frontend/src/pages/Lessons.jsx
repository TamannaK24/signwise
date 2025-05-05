import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../Lessons.css';
import arrow from '../assets/arrow.png';

function Lessons() {
  return (
    <div className="lessons-bg">
      <Sidebar />
      <div className="lessons-content">
        <div className="lessons-title">
          <h1>Lessons</h1>
        </div>

        <div className="lessons-boxes">
          <Link to="/guided-hands" className="box">
            <div className="box-title">Guided Hands</div>
            <div className="box-body">
              <div className="box-text">
                Video instruction tutorials of signing each letter and user must replicate
              </div>
            </div>
            <div className="arrow-img">
              <img src={arrow} alt="arrow" />
            </div>
          </Link>

          <Link to="/FSFLevelMenu" className="box">
            <div className="box-title">Finger Spell Focus</div>
            <div className="box-body">
              <div className="box-text">
                Provides user with letter and user must answer with the correct corresponding ASL symbol
              </div>
            </div>
            <div className="arrow-img">
              <img src={arrow} alt="arrow" />
            </div>
          </Link>

          <Link to="/WTHLevelMenu" className="box">
            <div className="box-title">Words to Hands</div>
            <div className="box-body">
              <div className="box-text">
                Provides user with word and user must answer with the correct corresponding ASL symbol for each letter
              </div>
            </div>
            <div className="arrow-img">
              <img src={arrow} alt="arrow" />
            </div>
          </Link>

          <Link to="/sign-to-text" className="box">
            <div className="box-title">Sign to Text</div>
            <div className="box-body">
              <div className="box-text">
                User presented with various ASL symbols and must type the correct letter or word
              </div>
            </div>
            <div className="arrow-img">
              <img src={arrow} alt="arrow" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Lessons;
