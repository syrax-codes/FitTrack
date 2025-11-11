// client/src/App.jsx
import React from 'react';
import Login from './Login.jsx';
import Register from './Register.jsx';

function App() {
  return (
    <div>
      <h2>User Account</h2>
      <p>Register a new account or log in to an existing one.</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
        <Register />
        <Login />
      </div>
    </div>
  );
}

export default App;