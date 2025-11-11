// client/src/LogDiet.jsx
import React, { useState } from 'react';

function LogDiet() {
  const [foodItem, setFoodItem] = useState('');
  const [calories, setCalories] = useState('');
  const [message, setMessage] = useState('');

// In client/src/LogDiet.jsx, REPLACE the handleSubmit function:
const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage('');
  const userId = localStorage.getItem('userId'); // Get the logged-in user's ID

  if (!userId) {
    setMessage('Error: You must be logged in to log a diet.');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/log-diet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        foodItem,
        calories: Number(calories),
        userId: userId // <-- Send the "stamp"
      })
    });

    const data = await response.json();
    if (response.ok) {
      setMessage(data.message);
      setFoodItem('');
      setCalories('');
    } else {
      setMessage(`Error: ${data.message}`);
    }
  } catch (error) {
    setMessage('Network error. Could not connect to server.');
  }
};

  return (
    <div>
      <h2>Log Your Diet</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Food Item: </label>
          {/* FIX: Changed 'e.g.target.value' to 'e.target.value' */}
          <input type="text" value={foodItem} onChange={(e) => setFoodItem(e.target.value)} required />
        </div>
        <div>
          <label>Calories Consumed: </label>
          {/* This input was missing from your screenshot */}
          <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} required />
        </div>
        {/* This button was missing from your screenshot */}
        <button type="submit">Log Diet</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default LogDiet;