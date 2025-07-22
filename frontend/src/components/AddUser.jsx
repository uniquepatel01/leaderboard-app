import React, { useState } from 'react';
import axios from 'axios';

function AddUser({ onUserAdded }) {
  const [name, setName] = useState('');

  const handleAdd = async () => {
    if (!name) return;
    await axios.post('http://localhost:5000/api/users', { name });
    setName('');
    onUserAdded();
  };

  return (
    <div className="mb-6 flex flex-col md:flex-row items-center gap-4">
      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 rounded border border-gray-300 w-full md:w-auto"
      />
      <button
        onClick={handleAdd}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full md:w-auto"
      >
        Add User
      </button>
    </div>
  );
}

export default AddUser;