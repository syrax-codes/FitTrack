// client/src/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to FitTrack</h1>
      <p style={{ fontSize: '1.2rem' }}>
        Your simple, all-in-one solution to log daily workouts and track your diet.
      </p>
      <p>
        Stay motivated and monitor your health progress easily. 
        Get started by logging your first meal or workout!
      </p>
      <div style={{ marginTop: '30px' }}>
        <Link to="/log-workout" style={{ ...styles.button, ...styles.buttonPrimary }}>
          Log a Workout
        </Link>
        <Link to="/log-diet" style={{ ...styles.button, ...styles.buttonSecondary }}>
          Log a Meal
        </Link>
      </div>
    </div>
  );
}

// Simple styles for the buttons
const styles = {
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  buttonPrimary: {
    backgroundColor: '#007bff',
    color: 'white',
  },
  buttonSecondary: {
    backgroundColor: '#6c757d',
    color: 'white',
  }
};

export default Home;