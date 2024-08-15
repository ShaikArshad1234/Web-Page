import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [entries, setEntries] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && age) {
      setEntries([...entries, { name, age }]);
      setName('');
      setAge('');
    }
  };

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Web Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Your Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ marginLeft: '10px', marginRight: '20px' }}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Enter Your Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            style={{ marginLeft: '16px', marginRight: '20px' }}
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Add</button>
      </form>

      <table style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Age</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{entry.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{entry.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
