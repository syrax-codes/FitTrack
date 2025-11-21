// client/src/LogWorkout.jsx
import React, { useState } from 'react';

function LogWorkout() {
  const [exerciseType, setExerciseType] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');
  const [message, setMessage] = useState('');


const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage('');
  const userId = localStorage.getItem('userId'); 

  if (!userId) {
    setMessage('Error: You must be logged in to log a workout.');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/api/log-workout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        exerciseType,
        duration: Number(duration),
        calories: Number(calories),
        userId: userId 
      })
    });

    const data = await response.json();
    if (response.ok) {
      setMessage(data.message);
      setExerciseType('');
      setDuration('');
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
      <h2>Log Your Workout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Exercise Type: </label>
          <input type="text" value={exerciseType} onChange={(e) => setExerciseType(e.target.value)} required />
        </div>
        <div>
          <label>Duration (minutes): </label>
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
        </div>
        <div>
          <label>Calories Burned: </label>
          <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
        </div>
        <button type="submit">Log Workout</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default LogWorkout;