// client/src/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Dashboard</h2>
      <p>Welcome! From here you can log your activities or check your progress.</p>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <Link to="/log-workout" style={styles.card}>
          <h3>Log Workout</h3>
          <p>Record your latest exercise session.</p>
        </Link>
        <Link to="/log-diet" style={styles.card}>
          <h3>Log Diet</h3>
          <p>Add your meals and track calories.</p>
        </Link>
        <Link to="/progress" style={styles.card}>
          <h3>View Progress</h3>
          <p>See all your logs in one place.</p>
        </Link>
      </div>
    </div>
  );
}


const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    width: '200px',
    textDecoration: 'none',
    color: 'black',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
};

export default Dashboard;