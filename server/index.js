// server/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 

const Workout = require('./models/Workout');
const Diet = require('./models/Diet');
const User = require('./models/User');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection ---
// Get your connection string from Atlas
const db_uri = 'mongodb+srv://testuser:testpassword123@fittrackcluster.vzgx5hx.mongodb.net/?appName=FitTrackCluster';

mongoose.connect(db_uri)
  .then(() => console.log("MongoDB connection established successfully"))
  .catch(err => console.log("MongoDB connection error: ", err));



app.get('/api', (req, res) => {
  res.json({ message: "Hello from the FitTrack server!" });
});

// API Route for Logging Workout ---
app.post('/api/log-workout', async (req, res) => {
  try {
    // get userId from the request body
    const { exerciseType, duration, calories, userId } = req.body; 

    const newWorkout = new Workout({
      exerciseType,
      duration,
      calories,
      userId 
    });

    await newWorkout.save();
    res.status(201).json({ message: 'Workout logged successfully!' });

  } catch (error) {
    res.status(500).json({ message: 'Server error logging workout.', error });
  }
});
// API Route for Logging Diet ---
app.post('/api/log-diet', async (req, res) => {
  try {
    //get userId from the request body
    const { foodItem, calories, userId } = req.body;

    const newDietLog = new Diet({
      foodItem,
      calories,
      userId 
    });

    await newDietLog.save();
    res.status(201).json({ message: 'Diet logged successfully!' });

  } catch (error) {
    res.status(500).json({ message: 'Server error logging diet.', error });
  }
});
// API Route to GET all workouts 
app.get('/api/my-workouts/:userId', async (req, res) => {
  try {
    const { userId } = req.params; // Get userId from URL
    const allWorkouts = await Workout.find({ userId: userId }); // Find only by user
    res.status(200).json(allWorkouts);
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching workouts.', error });
  }
});

// API Route to GET all diet logs 
app.get('/api/my-diets/:userId', async (req, res) => {
  try {
    const { userId } = req.params; // Get userId from URL
    const allDiets = await Diet.find({ userId: userId }); // Find only by user
    res.status(200).json(allDiets);
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching diets.', error });
  }
});
// API Route for User Registration
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    // Create and save the new user
    const newUser = new User({
      email,
      password // Saving plain text password
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });

  } catch (error) {
    res.status(500).json({ message: 'Server error registering user.', error });
  }
});

// API Route for User Login  
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Success, Send back the user's ID and email
    res.status(200).json({ 
      message: `Welcome back, ${user.email}!`,
      userId: user._id, 
      userEmail: user.email 
    });

  } catch (error) {
    res.status(500).json({ message: 'Server error logging in.', error });
  }
});

app.delete('/api/reset-progress/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    // Delete all workouts for this user
    await Workout.deleteMany({ userId: userId });

    // Delete all diet logs for this user
    await Diet.deleteMany({ userId: userId });

    res.status(200).json({ message: 'Progress reset successfully!' });

  } catch (error) {
    res.status(500).json({ message: 'Server error resetting progress.', error });
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});