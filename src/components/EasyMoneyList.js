import React, { useEffect, useState } from 'react';
import api from '../api';

function EasyMoneyList() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('')
      .then(response => {
        console.log('Data received:', response.data);
        setEntries(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching entries:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading entries...</p>;

  return (
    <div>
      <h2>EasyMoney Entries</h2>
      {entries.length === 0 ? (
        <p>No entries found.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(entry => (
              <tr key={entry.id}>
                <td>{entry.id}</td>
                <td>{entry.description}</td>
                <td>${entry.money}</td>
                <td>{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EasyMoneyList;