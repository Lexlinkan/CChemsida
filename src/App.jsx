import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home';
import Footer from './Footer/Footer';
import Business from './Business/Business';
import Tjanster from './Tjanster/Tjanster';
import Kontakt from './Kontakt/Kontakt';
import Markservice from './Markservice/Markservice';
import Referenser from './Referenser/Referenser';
import KvalitetMiljo from './Kvalitet&Miljö/KvalitetMiljo';
import LedigaJobb from './LedigaJobb/LedigaJobb';
import About from './About/About';
// import Privat from './Privat';
// import Intresseanmälan from './Intresseanmälan';
// import PrisLista from './PrisLista';



function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Business />} />
        {/* <Route path="/privat" element={<Privat />} /> */}
        <Route path="/tjanster" element={<Tjanster />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/offert" element={<Offert />} />
        <Route path="/markservice" element={<Markservice />} />
        <Route path="/referenser" element={<Referenser />} />
        <Route path="/kvalitetmiljo" element={<KvalitetMiljo />} />
        <Route path="/ledigajobb" element={<LedigaJobb />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/intresseanmalan" element={<Intresseanmälan />} /> */}
        {/* <Route path="/prislista" element={<PrisLista />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
