import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OwnerList() {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    axios.get('/api/owners')
      .then(response => {
        setOwners(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the owners!', error);
      });
  }, []);

  return (
    <div>
      <h2>Owner List</h2>
      <ul>
        {owners.map(owner => (
          <li key={owner.id}>{owner.name} - {owner.phoneNumber}</li>
        ))}
      </ul>
    </div>
  );
}

export default OwnerList;
