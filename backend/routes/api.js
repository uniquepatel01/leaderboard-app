const express = require('express');
const router = express.Router();
const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Add new user
router.post('/users', async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.json(user);
});

// Claim points
router.post('/claim', async (req, res) => {
  const user = await User.findById(req.body.userId);
  const points = Math.floor(Math.random() * 10) + 1;
  user.totalPoints += points;
  await user.save();

  const history = new ClaimHistory({ userId: user._id, points });
  await history.save();

  res.json({ user, points });
});

// Leaderboard
router.get('/leaderboard', async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  const ranked = users.map((u, i) => ({
    name: u.name,
    totalPoints: u.totalPoints,
    rank: i + 1,
  }));
  res.json(ranked);
});

module.exports = router;