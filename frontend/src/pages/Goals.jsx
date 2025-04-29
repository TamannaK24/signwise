import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../Goals.css';

function Goals() {
  const [goals, setGoals] = useState([
    { id: 1, text: 'Sign to Text - Level 2', done: false },
    { id: 2, text: 'Finger Spell - Level 3', done: false }
  ]);
  const [tempGoal, setTempGoal] = useState('');

  const toggleDone = id =>
    setGoals(prev =>
      prev.map(g => (g.id === id ? { ...g, done: !g.done } : g))
    );

  const addGoal = e => {
    e.preventDefault();
    const txt = tempGoal.trim();
    if (!txt) return;
    setGoals(prev => [...prev, { id: Date.now(), text: txt, done: false }]);
    setTempGoal('');
  };

  return (
    <div className="bg">
      <Sidebar />
      <div className="content">
        <div className="title">
          <h1>Goals</h1>
        </div>

        <div className="wrapper">
          <div className="column">
            <div className="widgets">
              <div className="current-goals">
                <h2 className="box-title">Current Goals</h2>
                <div className="goals">
                  <ul className="goal-list">
                    {goals.map(g => (
                      <li
                        key={g.id}
                        className={`goal-item${g.done ? ' done' : ''}`}
                      >
                        <label>
                          <input
                            type="checkbox"
                            checked={g.done}
                            onChange={() => toggleDone(g.id)}
                          />
                          <span>{g.text}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                  <form className="todo-input" onSubmit={addGoal}>
                    <input
                      value={tempGoal}
                      onChange={e => setTempGoal(e.target.value)}
                      placeholder="Add a new goal…"
                    />
                    <button type="submit">+</button>
                  </form>
                  </div>
              </div>

              <div className="leaderboard">
                <h2 className="box-title">Leaderboard</h2>
                <div className="goals">
                  <ol className="leaderboard-list">
                    <li><strong>Sarah M.</strong> - 2,450 pts</li>
                    <li><strong>John D.</strong> - 2,280 pts</li>
                    <li><strong>You</strong> - 1,950 pts</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <h2 className="box-title">Lesson Progress</h2>
            <div className="goals">
              {["Sign to Text", "Guided Hands", "Finger Spell Focus", "Words to Hands"].map((lesson, i) => (
                <div key={i}>
                  <p>{lesson}</p>
                  <div className="level-buttons">
                    {[1, 2, 3, 4].map(level => (
                      <button key={level} className={lesson === "Finger Spell Focus" && level <= 3 || lesson === "Sign to Text" && level <= 2 || lesson === "Guided Hands" && level === 1 || lesson === "Words to Hands" && level === 1 ? 'level active' : 'level'}>L{level}✓</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="column">
            <h2 className="box-title">Achievements</h2>
            <div className="goals">
              <div className="achievement">
                <p>🌟 Quick Learner</p>
                <span>Complete 5 lessons in one day</span>
              </div>
              <div className="achievement">
                <p>🔥 Streak Master</p>
                <span>7-day learning streak</span>
              </div>
              <div className="achievement inactive">
                <p>🏆 Expert Signer</p>
                <span>Complete all levels</span>
              </div>
              <div className="achievement inactive">
                <p>🎖️ Top Student</p>
                <span>Reach #1 on leaderboard</span>
              </div>

              <h3>Daily Streak</h3>
              <div className="streak-days">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <div key={i} className={`day ${i < 3 ? 'active' : ''}`}>{d}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;