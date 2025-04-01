import Sidebar from '../components/Sidebar';
import ProgressBar from '../components/ProgressBar';
import '../wordsToHands.css';

function wordsToText() {

    return (
      <div className="goals-bg">
        <Sidebar/>
        <div className="wth-content">
          <div className="goals-title">
            <h1>Words to Hands</h1>
          </div>

          <div className="words-to-txt-container">
            <div className='prompt'>
              <h2>Sign the following word.</h2></div>
            <div className="text-box">
              <h2>CAT</h2>
            </div>
            <div className="word-boxes">
              <div className="box1">C</div>
              <div className="box2">A</div>
              <div className="box3">T</div>
            </div>
            <div className="progress-bar">
              <ProgressBar/>
            </div>

          </div>
        </div>
      </div>

    );
  };
  
  export default wordsToText;