// client/src/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const styles = {
    heroImage: {
      width: '100%', 
      maxHeight: '300px', 
      objectFit: 'cover', 
      borderRadius: '8px', 
      marginBottom: '10px' 
    },
    button: {
      padding: '10px 20px',
      margin: '0 10px',
      borderRadius: '5px',
      textDecoration: 'none',
      fontWeight: 'bold',
      cursor: 'pointer' 
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

  return (
    <div style={{ textAlign: 'center' }}>
      
      <h1>Welcome To FitTrack</h1>
      <img 
        src="/running.jpg" 
        alt="A person running on a track"
        style={styles.heroImage}
      />

      <div style={{ padding: '20px' }}>
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

    </div>
  );
}

export default Home;