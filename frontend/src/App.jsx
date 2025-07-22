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

  const API_BASE = 'https://leaderboard-app-si6t.onrender.com/api';

  const fetchUsers = async () => {
    const res = await axios.get(`${API_BASE}/users`);
    setUsers(res.data);
  };

  const fetchLeaderboard = async () => {
    const res = await axios.get(`${API_BASE}/leaderboard`);
    setLeaderboard(res.data);
  };

  const handleClaim = async () => {
    if (!selectedUserId) return alert('Select a user first!');
    const res = await axios.post(`${API_BASE}/claim`, {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center py-6 px-2">
      <div className="bg-white/90 shadow-xl rounded-2xl w-full max-w-lg p-6 sm:p-10 flex flex-col gap-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-purple-700 mb-2 tracking-tight drop-shadow">
          🏆 Leaderboard App
        </h1>
        <p className="text-center text-gray-500 mb-4 text-sm sm:text-base">
          Add users, claim points, and see who’s on top!
        </p>
        <div className="flex flex-col gap-4">
          <AddUser onUserAdded={fetchUsers} />
          <UserSelector
            users={users}
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
            onClaim={handleClaim}
            claimedPoints={claimedPoints}
          />
        </div>
        <div className="mt-4">
          <Leaderboard leaderboard={leaderboard} />
        </div>
      </div>
      <footer className="mt-8 text-xs text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Leaderboard App. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
