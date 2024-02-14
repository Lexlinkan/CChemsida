import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Business from './Business';
import Tjanster from './Tjanster';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/tjanster" element={<Tjanster />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
