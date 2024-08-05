import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Servicios() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    axios.get('/api/servicios')
      .then(response => setServicios(response.data))
      .catch(error => console.error('Error fetching servicios:', error));
  }, []);

  return (
    <div>
      <h1>Servicios</h1>
      <ul>
        {servicios.map(servicio => (
          <li key={servicio.id}>{servicio.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Servicios;
