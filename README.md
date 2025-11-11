FitTrack - Fitness & Diet Tracker

FitTrack is a simple and lightweight web application built for a university project. It allows users to register, log in, and track their daily workouts and meals. All data is saved on a per-user basis, providing a personal progress report.

This project was built using the MERN stack (MongoDB, Express.js, React, Node.js) with Vite as the frontend build tool.

Features

User Authentication: Users can register for a new account and log in. The app saves the user's session in the browser.

User-Specific Data: All data (workouts, diet) is tied to the logged-in user. A new user sees a clean slate.

Workout Logging: A form to log daily exercises, including type, duration, and calories burned.

Diet Logging: A form to log meals, including food items and calories consumed.

Progress Tracking: A summary page that displays all of the logged-in user's workouts and diet logs in tables.

Reset Progress: Users can delete all their personal data to start fresh.

Multi-Page Interface: A 10-page website built with React Router, including static pages like "About Us," "Team," and "Contact."

Tech Stack

Frontend: React (with Vite), React Router

Backend: Node.js, Express.js

Database: MongoDB (using MongoDB Atlas)

Libraries: Mongoose, CORS

How to Run

To run this project, you will need two terminals.

1. Backend (Server):

# Navigate to the server folder
cd server

# Install dependencies
npm install

# Run the server
node index.js


Note: You must create your own MongoDB Atlas database and paste your connection string into server/index.js for the server to run.

2. Frontend (Client):

# Navigate to the client folder
cd client

# Install dependencies
npm install

# Run the app
npm run dev


Project Team: Vector3

Aaditya Vashisht - CS004

Aarohi Jaiswal - CS009

Abhiraj Dhananjay - CS016