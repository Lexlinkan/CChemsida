import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Business from './Business';
import Tjanster from './Tjanster';
import Kontakt from './Kontakt';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/tjanster" element={<Tjanster />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
