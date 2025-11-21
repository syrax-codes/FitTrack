// client/src/Progress.jsx
import React, { useState, useEffect } from 'react';

function Progress() {
  const [workouts, setWorkouts] = useState([]);
  const [diets, setDiets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(''); // To show reset message

  useEffect(() => {
    const fetchAllData = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setLoading(false);
        return; 
      }
      try {
        setLoading(true);
        const workoutRes = await fetch(`http://localhost:5000/api/my-workouts/${userId}`);
        const workoutData = await workoutRes.json();
        if (workoutRes.ok) setWorkouts(workoutData);

        const dietRes = await fetch(`http://localhost:5000/api/my-diets/${userId}`);
        const dietData = await dietRes.json();
        if (dietRes.ok) setDiets(dietData);

      } catch (error) {
        console.error("Error fetching progress:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

  const handleReset = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) return; // Not logged in

    // Show a confirmation pop-up
    if (window.confirm('Are you sure you want to delete all your logs? This cannot be undone.')) {
      try {
        const res = await fetch(`http://localhost:5000/api/reset-progress/${userId}`, {
          method: 'DELETE'
        });
        const data = await res.json();

        if (res.ok) {
          
          setWorkouts([]);
          setDiets([]);
          setMessage(data.message); // Show success message
        } else {
          setMessage(`Error: ${data.message}`);
        }
      } catch (error) {
        setMessage('Network error during reset.');
      }
    }
  };

  if (loading) {
    return <p>Loading your progress...</p>;
  }

  if (!localStorage.getItem('userId')) {
    return <h2>Please log in to see your progress.</h2>;
  }

  return (
    <div>
      <h2>Your Progress</h2>
      <p>Here's a summary of your logged workouts and meals.</p>
      <button onClick={handleReset} className="danger" style={{ marginBottom: '20px' }}>
        Reset All My Progress
      </button>
      {message && <p style={{ color: 'green' }}>{message}</p>}

      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px' }}>
        <div>
          <h3>Workout Logs</h3>
          {workouts.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Exercise</th>
                  <th>Duration (min)</th>
                  <th>Calories</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {workouts.map((workout) => (
                  <tr key={workout._id}>
                    <td>{workout.exerciseType}</td>
                    <td>{workout.duration}</td>
                    <td>{workout.calories}</td>
                    <td>{new Date(workout.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No workouts logged yet.</p>
          )}
        </div>

        <div>
          <h3>Diet Logs</h3>
          {diets.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Food Item</th>
                  <th>Calories</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {diets.map((diet) => (
                  <tr key={diet._id}>
                    <td>{diet.foodItem}</td>
                    <td>{diet.calories}</td>
                    <td>{new Date(diet.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No diet logs yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Progress;