// client/src/Login.jsx
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage('');

  try {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('userEmail', data.userEmail);

      
      window.location.href = '/dashboard'; 

    } else {
      setMessage(`Error: ${data.message}`);
      localStorage.clear(); 
    }
  } catch (error) {
    setMessage('Network error. Could not connect.');
    localStorage.clear();
  }
};

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;