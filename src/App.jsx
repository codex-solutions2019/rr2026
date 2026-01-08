import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Visa from './pages/Visa';
import Contact from './pages/Contact';
import ANM from './pages/ANM';
import GNM from './pages/GNM';
import BSCNursing from './pages/BSCNursing';
import Paramedical from './pages/Paramedical';
import Login from './pages/admin/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/anm" element={<ANM />} />
        <Route path="/gnm" element={<GNM />} />
        <Route path="/bsc-nursing" element={<BSCNursing />} />
        <Route path="/paramedical" element={<Paramedical />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
