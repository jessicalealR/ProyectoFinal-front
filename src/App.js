import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Desparasitacion from './components/Desparasitacion';
import Vacunacion from './components/Vacunacion';
import Esterilizacion from './components/Esterilizacion';
import Urgencias from './components/Urgencias';
import Hospitalizacion from './components/Hospitalizacion';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desparasitacion" element={<Desparasitacion />} />
          <Route path="/vacunacion" element={<Vacunacion />} />
          <Route path="/esterilizacion" element={<Esterilizacion />} />
          <Route path="/urgencias" element={<Urgencias />} />
          <Route path="/hospitalizacion" element={<Hospitalizacion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
