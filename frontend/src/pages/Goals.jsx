import Sidebar from '../components/Sidebar';
import '../Goals.css'

function Goals() {

    return (
      <div className="goals-bg">
        <Sidebar/>
        <div className="goals-content">
          <div className="goals-title">
            <h1>Goals</h1>
          </div>

          <div className="goals-wrapper">

            <div className="goal-item">
              <h2>Goal 1</h2>
              <div className="goals1">
                <h2>goals1</h2>
              </div>
            </div>

            <div className="goal-item">
              <h2>Goal 2</h2>
              <div className="goals2">
                <h2>goals2</h2>
              </div>
            </div>

            <div className="goal-item">
              <h2>Goal 3</h2>
              <div className="goals3">
                <h2>goals3</h2>
              </div>
            </div>

            {/* <div className="goals2">
              <h2>goals2</h2>
            </div>
            <div className="goals3">
              <h2>goals3</h2>
            </div> */}
          </div>
          
        </div>
      </div>

    );
  };
  
  export default Goals;