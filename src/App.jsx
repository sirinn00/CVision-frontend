import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import CvPage from './components/pages/Cvpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv-olustur" element={<CvPage />} />
      </Routes>
    </Router>
  );
}

export default App;
