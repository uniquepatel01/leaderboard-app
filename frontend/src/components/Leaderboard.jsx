import React from 'react';

function Leaderboard({ leaderboard }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <div className="max-w-2xl mx-auto overflow-x-auto">
        <table className="w-full text-left bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Rank</th>
              <th className="p-2">Name</th>
              <th className="p-2">Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user) => (
              <tr key={user.rank} className="border-t">
                <td className="p-2">#{user.rank}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.totalPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;