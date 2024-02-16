import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Business from './Business';
import Tjanster from './Tjanster';
import Kontakt from './Kontakt';
import Offert from './Offert';
import Markservice from './Markservice';
import Referenser from './Referenser';
import KvalitetMiljo from './KvalitetMiljo';
import LedigaJobb from './LedigaJobb';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/tjanster" element={<Tjanster />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/offert" element={<Offert />} />
        <Route path="/markservice" element={<Markservice />} />
        <Route path="/referenser" element={<Referenser />} />
        <Route path="/kvalitetmiljo" element={<KvalitetMiljo />} />
        <Route path="/ledigajobb" element={<LedigaJobb />} />
        <Route path="/omoss" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
