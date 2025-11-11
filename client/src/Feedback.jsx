// client/src/Feedback.jsx
import React from 'react';

function Feedback() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback! (This is a demo form).');
  };

  return (
    <div>
      <h2>Feedback</h2>
      <p>We'd love to hear your thoughts! (This is a non-functional demo).</p>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Email:</label>
          <input type="email" style={{ width: '95%' }} required />
        </div>
        <div>
          <label>Your Feedback:</label>
          <textarea style={{ width: '95%' }} rows="5" required></textarea>
        </div>
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;