import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// A functional component to display the service information
function Service({ title, description }) {
  return (
    <section className="service">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

// Create components for each service page
function DrivingService() {
  return (
    <Service
      title="Driving People Around Chicago"
      description="We provide safe and reliable driving services around Chicago. Whether you need transportation for work, appointments, or leisure, we’ve got you covered."
    />
  );
}

function RoadTestPrep() {
  return (
    <Service
      title="Road Test Preparation"
      description="Our road test preparation services help you gain the skills and confidence needed to pass your driving test. Our experienced instructors will guide you through the process."
    />
  );
}

function VietnameseInterpreter() {
  return (
    <Service
      title="Vietnamese Interpreter"
      description="We offer professional Vietnamese interpreting services. Whether you need help with legal, medical, or general translation, we’re here to assist you."
    />
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Our Services</h1>
        </header>

        {/* Navigation Menu */}
        <nav>
          <ul className="nav">
            <li><Link to="/">Driving Service</Link></li>
            <li><Link to="/road-test-prep">Road Test Prep</Link></li>
            <li><Link to="/vietnamese-interpreter">Vietnamese Interpreter</Link></li>
          </ul>
        </nav>

        {/* Routes to render different service pages */}
        <Routes>
          <Route path="/" element={<DrivingService />} />
          <Route path="/road-test-prep" element={<RoadTestPrep />} />
          <Route path="/vietnamese-interpreter" element={<VietnameseInterpreter />} />
        </Routes>

        <footer>
          <p>© 2024 Service Website</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
