import React from 'react';

function UserSelector({ users, selectedUserId, setSelectedUserId, onClaim, claimedPoints }) {
  return (
    <div className="my-6 flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-3 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-4 rounded-xl shadow-inner border border-purple-100">
      <div className="flex-1 w-full">
        <label className="block text-sm font-medium text-purple-700 mb-1" htmlFor="user-select">
          Choose User
        </label>
        <select
          id="user-select"
          className="p-2 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
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
      </div>
      <button
        onClick={onClaim}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg shadow hover:from-purple-600 hover:to-pink-600 transition font-semibold w-full md:w-auto"
      >
        Claim Points
      </button>
      {claimedPoints && (
        <div className="flex-1 w-full md:w-auto">
          <p className="mt-3 text-green-600 font-semibold text-center bg-green-50 border border-green-200 rounded-lg py-2 px-3 shadow-sm">
            🎉 {claimedPoints} points awarded!
          </p>
        </div>
      )}
    </div>
  );
}

export default UserSelector;