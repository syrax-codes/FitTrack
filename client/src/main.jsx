// client/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css'; 

// Import all our page components
import App from './App.jsx';
import Home from './Home.jsx';
import Dashboard from './Dashboard.jsx';
import LogWorkout from './LogWorkout.jsx';
import LogDiet from './LogDiet.jsx';
import Progress from './Progress.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Team from './Team.jsx';
import Feedback from './Feedback.jsx';


function Navigation() {
  const userEmail = localStorage.getItem('userEmail'); 

  const handleLogout = () => {
    localStorage.clear(); 
    window.location.href = '/login'; 
  };

  return (
    
    <nav> 
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/log-workout">Log Workout</Link>
      <Link to="/log-diet">Log Diet</Link>
      <Link to="/progress">Progress</Link>
      <Link to="/about">About Us</Link>
      <Link to="/team">Team</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/feedback">Feedback</Link>

      <div>
        {userEmail ? (
          <>
            <span>Welcome, {userEmail}!</span>
            <button onClick={handleLogout} className="danger">Logout</button>
          </>
        ) : (
          <Link to="/login">Login / Register</Link>
        )}
      </div>
    </nav>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      
      <div className="page-container">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<App />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/log-workout" element={<LogWorkout />} />
          <Route path="/log-diet" element={<LogDiet />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);