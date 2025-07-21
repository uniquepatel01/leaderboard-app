import React from 'react';

function UserSelector({ users, selectedUserId, setSelectedUserId, onClaim, claimedPoints }) {
  return (
    <div className="my-6">
      <select
        className="p-2 rounded border border-gray-300 mr-4"
        value={selectedUserId || ''}
        onChange={(e) => setSelectedUserId(e.target.value)}
      >
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
      <button
        onClick={onClaim}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Claim Points
      </button>
      {claimedPoints && (
        <p className="mt-3 text-green-600 font-semibold">
          🎉 {claimedPoints} points awarded!
        </p>
      )}
    </div>
  );
}

export default UserSelector;
