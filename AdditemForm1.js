import React, { useState } from 'react';

function AdditemForm({ onAddItem }) {
  const [item, setItem] = useState('');

  const handleChange = (e) => setItem(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item.trim()) return; // Prevent adding empty items
    onAddItem(item);
    setItem('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={handleChange}
        placeholder="Add an item"
        aria-label="Item to add"
      />
      <button type="submit" disabled={!item.trim()}>
        Add Item
      </button>
    </form>
  );
}

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>My Item List</h1>
      <AdditemForm onAddItem={addItem} />
      <ul>
        {items.map((it, index) => (
          <li key={index}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
