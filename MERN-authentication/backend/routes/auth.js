const express = require("express");
const jwt = require("jsonwebtoken");

const User = require("./models/User");

const router = express.Router();

// Login endpoint
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Check if the password is correct
  const validPassword = await user.isValidPassword(password);

  if (!validPassword) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Generate and return a JWT token
  const token = jwt.sign({ id: user._id }, "secretkey", {
    expiresIn: "1h",
  });

  res.json({ token });
});

// Register endpoint
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Create a new user object
  const user = new User({ username, email });

  // Set the password (using a setter method defined in the User model)
  user.setPassword(password);

  try {
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
