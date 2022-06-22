import React from 'react';
import './App.scss';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import PasswordGenerator from './pages/passwordGenerator/PasswordGenerator'
import UrlShortener from './pages/urlShortener/UrlShortener'
import QrGenerator from './pages/qrGenerator/QrGenerator'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/password-generator' element={<PasswordGenerator />} />
        <Route path='/qr-generator' element={<QrGenerator />} />
        <Route path='/url-shortener' element={<UrlShortener />} />
      </Routes>
    </Router >

  );
}

export default App;
