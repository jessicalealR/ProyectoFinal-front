import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dueños() {
  const [dueños, setDueños] = useState([]);

  useEffect(() => {
    axios.get('/api/dueños')
      .then(response => setDueños(response.data))
      .catch(error => console.error('Error fetching dueños:', error));
  }, []);

  return (
    <div>
      <h1>Dueños</h1>
      <ul>
        {dueños.map(dueño => (
          <li key={dueño.id}>{dueño.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dueños;
