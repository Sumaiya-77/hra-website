import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'; // ✅ CORRECT
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import About from './pages/About';
import CheckOut from './pages/CheckOut';
import Support from './pages/Support';
import WhatsAppButton from "./pages/WhatsAppButton";
import Footer from './components/Footer';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cancellation from './pages/Cancellation';


function App() {
  return (
    <Router>
      <Header /> {/* ✅ Global header appears on every route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<About />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cancellation" element={<Cancellation />} />

      </Routes>
      <WhatsAppButton />
      <Footer/>
      
    </Router>
    
  );
}

export default App;
