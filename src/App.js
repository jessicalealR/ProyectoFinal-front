import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Dueños from './components/Dueños';
import Mascotas from './components/Mascotas';
import Servicios from './components/Servicios';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dueños" element={<Dueños />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
