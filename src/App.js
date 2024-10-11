import React from 'react';

// A functional component to display the service information
function Service({ title, description }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Services</h1>

      {/* Driving Around Chicago Service */}
      <Service 
        title="Driving People Around Chicago" 
        description="We provide safe and reliable driving services around Chicago. Whether you need transportation for work, appointments, or leisure, we’ve got you covered." 
      />

      {/* Road Test Preparation Service */}
      <Service 
        title="Road Test Preparation" 
        description="Our road test preparation services help you gain the skills and confidence needed to pass your driving test. Our experienced instructors will guide you through the process." 
      />

      {/* Vietnamese Interpreter Service */}
      <Service 
        title="Vietnamese Interpreter" 
        description="We offer professional Vietnamese interpreting services. Whether you need help with legal, medical, or general translation, we’re here to assist you." 
      />
    </div>
  );
}

export default App;
