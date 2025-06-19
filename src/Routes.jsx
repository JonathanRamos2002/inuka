import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import EventsPage from './pages/Events';
import ContactPage from './pages/Contact';
import DonationPage from './pages/Donate';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donate" element={<DonationPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;