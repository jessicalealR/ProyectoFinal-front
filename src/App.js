import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dueños from './components/Dueños';
import Mascotas from './components/Mascotas';
import Servicios from './components/Servicios';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/dueños" element={<Dueños />} />
          <Route path="/mascotas" element={<Mascotas />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/" element={<h1>Bienvenido a la Clínica Veterinaria</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
