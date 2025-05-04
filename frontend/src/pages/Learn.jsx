import Sidebar from '../components/Sidebar';
import '../Dashboard.css';

function Learn() {


    return (
      <div className="goals-bg">
        <Sidebar/>
        <div className="goals-content">
          <div className="goals-title">
            <h1>Dashboard</h1>
          </div>

          <div className="dashboard-wrapper">
            
            <div className="dashboard-left">
            <h2>Upcoming Activities</h2>
            <div className="activities-list">
              <div className="activity-box">Activity</div>
              <div className="activity-box">Activity</div>
              <div className="activity-box">Activity</div>
              <div className="activity-box">Activity</div>
              <div className="activity-box">Activity</div>
            </div>
          </div>


          <div className="dashboard-right">
            <div className="streak-counter">
              <h2>14 Day Streak!</h2>
            </div>

            <div className="circle-progress">
              <div className="outer-circle">
                <div className="inner-circle">
                  <div id="percent-number">65%</div>
                </div>
              </div>
              <svg className ="circle-fill" width="400px" height="400px">
                <circle cx="200" cy="200" r="185"/>
              </svg>
            </div>
            <div className="circle-label">
              <h2>Goals Reached</h2>
            </div>
          </div>
          
          </div>



        </div>
      </div>

    );
  };
  
  export default Learn;