// client/src/Team.jsx
import React from 'react';

function Team() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Our Team (Vector3)</h2> 
      <p>We are the students who developed this FitTrack application.</p>
      
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li style={styles.teamMember}>
          <strong>Aaditya Vashisht</strong> - CS004 
        </li>
        <li style={styles.teamMember}>
          <strong>Aarohi Jaiswal</strong> - CS009 
        </li>
        <li style={styles.teamMember}>
          <strong>Abhiraj Dhananjay</strong> - CS016 
        </li>
      </ul>
    </div>
  );
}

const styles = {
  teamMember: {
    fontSize: '1.1rem',
    margin: '10px 0',
  }
};

export default Team;