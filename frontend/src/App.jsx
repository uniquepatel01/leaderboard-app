
import './App.css'


import React, { useEffect, useState } from 'react';
import UserSelector from './components/UserSelector';
import AddUser from './components/AddUser';
import Leaderboard from './components/Leaderboard';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [claimedPoints, setClaimedPoints] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  const fetchLeaderboard = async () => {
    const res = await axios.get('http://localhost:5000/api/leaderboard');
    setLeaderboard(res.data);
  };

  const handleClaim = async () => {
    if (!selectedUserId) return alert('Select a user first!');
    const res = await axios.post('http://localhost:5000/api/claim', {
      userId: selectedUserId,
    });
    setClaimedPoints(res.data.points);
    fetchUsers();
    fetchLeaderboard();
  };

  useEffect(() => {
    fetchUsers();
    fetchLeaderboard();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">🏆 Leaderboard App</h1>
      <AddUser onUserAdded={fetchUsers} />
      <UserSelector
        users={users}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
        onClaim={handleClaim}
        claimedPoints={claimedPoints}
      />
      <Leaderboard leaderboard={leaderboard} />
    </div>
  );
}

export default App;
