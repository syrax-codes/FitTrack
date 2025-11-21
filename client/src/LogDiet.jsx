// client/src/LogDiet.jsx
import React, { useState } from 'react';

function LogDiet() {
  const [foodItem, setFoodItem] = useState('');
  const [calories, setCalories] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    const userId = localStorage.getItem('userId'); 

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
          userId: userId 
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

  const styles = {
    
    container: {
      display: 'flex',
      gap: '40px', 
      alignItems: 'flex-start', 
    },
    
    imageContainer: {
      flex: 1, 
      background: '#fff', 
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      textAlign: 'center',
    },
    
    image: {
      width: '100%', 
      maxWidth: '600px', 
      height: 'auto', 
      borderRadius: '4px',
    }
  };
  

  return (
    <div>
      <h2>Log Your Diet</h2>
      <div style={styles.container}>

        <form onSubmit={handleSubmit} style={{ flex: 1 }}> 
          <div>
            <label>Food Item: </label>
            <input type="text" value={foodItem} onChange={(e) => setFoodItem(e.target.value)} required />
          </div>
          <div>
            <label>Calories Consumed: </label>
            <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} required />
          </div>
          <button type="submit">Log Diet</button>
          {message && <p>{message}</p>}
        </form>

        <div style={styles.imageContainer}>
          <h3>Understanding a Balanced Diet</h3>
          <p>A balanced diet is key to staying healthy. Use this food pyramid as a guide for your meals.</p>
          <img 
            src="/balanced-diet.png" 
            alt="Balanced diet food pyramid" 
            style={styles.image} 
          />
        </div>

      </div>
    </div>
  );
}

export default LogDiet;