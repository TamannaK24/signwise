import '../Features.css';

function Features() {

    return (
      <>
      <h1>Features</h1>
      <div className="row">
        <div className="column">
          <h2>Personalized Dashboard</h2>
          <p>
            Easily track your progress with a clear, user-friendly dashboard. 
            View upcoming lessons, check completed milestones, and stay focused 
            with an overview of everything you're working toward.
          </p>
        </div>
        <div>
          <img src="https://placehold.co/500x300" alt="Feature 1" />
        </div>
      </div>
      <div className="row">
        <div>
          <img src="https://placehold.co/500x300" alt="Feature 2" />
        </div>
        <div className="column">
          <h2>Interactive Lessons</h2>
          <p>
            Learn ASL through engaging exercises, quizzes, and practice sessions 
            designed to build real-world communication skills. Every lesson adapts 
            to your pace, helping you stay confident and consistent.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h2>Progress Tracking</h2>
          <p>
            Set and customize your own learning goals to stay motivated. Whether it's mastering a 
            new set of signs each week or completing a course, your goals grow with you.
            Monitor your learning journey with detailed progress reports.
          </p>
        </div>
        <div>
          <img src="https://placehold.co/500x300" alt="Feature 3" />
        </div>
      </div>
    </>
  );
}

export default Features;