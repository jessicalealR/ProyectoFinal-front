import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Mascotas() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    axios.get('/api/mascotas')
      .then(response => setMascotas(response.data))
      .catch(error => console.error('Error fetching mascotas:', error));
  }, []);

  return (
    <div>
      <h1>Mascotas</h1>
      <ul>
        {mascotas.map(mascota => (
          <li key={mascota.id}>{mascota.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Mascotas;
