import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PetList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get('/api/pets')
      .then(response => {
        setPets(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the pets!', error);
      });
  }, []);

  return (
    <div>
      <h2>Pet List</h2>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>{pet.name} - {pet.species} - {pet.breed}</li>
        ))}
      </ul>
    </div>
  );
}

export default PetList;
