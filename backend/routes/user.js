const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const axios = require("axios");
const jwt = require("jsonwebtoken");

/**
 * @route   POST /signup
 * @desc    Register a new user
 * @access  Public
 */
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username is already in use
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "This username is already taken." });
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const user = new User({
      username,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "Registration successful." });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

/**
 * @route   POST /login
 * @desc    Authenticate user and issue JWT
 * @access  Public
 */
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username, explicitly selecting password field
    const user = await User.findOne({ username }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "User not found." });
    }

    // Check if the account is inactive
    if (!user.isActive) {
      return res.status(401).json({ message: "This account is inactive." });
    }

    // Prevent multiple active sessions for the same user
    if (user.isLoggedIn) {
      return res.status(401).json({
        message: "This account is already in use on another device.",
      });
    }

    // Validate password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      user.failedLoginAttempts += 1;
      user.lastLoginAttempt = new Date();

      // Lock account after 5 failed attempts
      if (user.failedLoginAttempts >= 5) {
        user.isActive = false;
        await user.save();
        return res.status(401).json({ message: "This account has been locked due to multiple failed login attempts." });
      }

      await user.save();
      return res.status(401).json({
        message: "Incorrect password.",
        remainingAttempts: 5 - user.failedLoginAttempts,
      });
    }

    // Reset failed login attempts on successful login
    user.failedLoginAttempts = 0;
    user.lastLoginAttempt = new Date();
    user.isLoggedIn = true;

    // Retrieve the user's public IP address
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      user.ipAddress = response.data.ip;
    } catch (error) {
      console.error("Failed to fetch IP address:", error);
    }

    await user.save();

    // Generate a JWT for authentication
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Set the token as a secure HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Ensure security in production
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });

    // Remove the password field before sending the user data in response
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    res.json({ user: userWithoutPassword });

  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

/**
 * @route   POST /logout
 * @desc    Logs out the user by clearing the authentication token
 * @access  Private
 */
router.post("/logout", async (req, res) => {
    try {
      const token = req.cookies.token;
  
      if (!token) {
        return res.status(400).json({ message: "User is already logged out." });
      }
  
      try {
        // Verify and decode the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
  
        if (user) {
          user.isLoggedIn = false;
          await user.save();
        }
      } catch (error) {
        console.error("Token verification error:", error.message);
      }
  
      // Clear the authentication token from cookies
      res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Ensure security in production
        sameSite: "strict",
      });
  
      res.json({ message: "Successfully logged out." });
    } catch (error) {
      console.error("Logout error:", error.message);
      res.status(500).json({ message: "Internal server error." });
    }
  });
  
  /**
   * @route   DELETE /delete/:userId
   * @desc    Deletes a user by ID
   * @access  Admin
   */
  router.delete("/delete/:userId", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
  
      res.json({ message: "User successfully deleted." });
    } catch (error) {
      console.error("User deletion error:", error.message);
      res.status(500).json({ message: "Internal server error." });
    }
  });
  
module.exports = router;
