import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ServicesPage from './components/ServicesPage';
import AboutUsPage from './components/AboutUsPage';
// Import other pages similarly

function App() {
  return (
    <Router>
      <div>
        {/* Navigation bar setup */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          {/* Define other routes similarly */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
