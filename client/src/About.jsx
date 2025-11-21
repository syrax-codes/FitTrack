// client/src/About.jsx
import React from 'react';

function About() {

  
  const styles = {
    teamSection: {
      marginTop: '40px',
      paddingTop: '20px',
      borderTop: '1px solid #eee',
      textAlign: 'center' 
    },
    teamImage: {
      width: '100%',
      maxWidth: '500px', 
      height: 'auto',
      borderRadius: '8px',
      marginBottom: '10px'
    }
  };

  return (
    
    
    <div>
      
      <h2>About FitTrack</h2>
      <p>
        FitTrack is a simple Fitness and Diet Tracking Web Application
        designed to help users log their daily workouts, record meals, and
        monitor their overall health progress.
      </p>
      <p>
        Our goal is to help users maintain a healthy lifestyle by
        keeping track of their exercise routines and diet patterns, all in one
        convenient place.
      </p>
      <p>
        This project was created as a mini-project for our Web Technology course.
        It uses the MERN stack (MongoDB, Express.js, React, and Node.js)
        to create a full-stack, dynamic web application.
      </p>

      <div style={styles.teamSection}>
        <h2>Our Team & Mentor</h2>
        <p>This project was brought to life by Team Vector3, under the expert guidance of our mentor.</p>
        
        <img 
          src="/founders.jpg" 
          alt="Founding team with their mentor" 
          style={styles.teamImage} 
        />
        
      </div>

    </div>
  );
}

export default About;