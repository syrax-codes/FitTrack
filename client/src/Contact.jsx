// client/src/Contact.jsx
import React from 'react';

function Contact() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! (This is a demo and does not send email).');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>Contact Us</h2>
      <p>Have questions? Fill out the form below. (This is a non-functional demo).</p>
      
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '15px 0' }}>
          <label>Your Name:</label><br />
          <input type="text" style={{ width: '100%', padding: '8px' }} required />
        </div>
        <div style={{ margin: '15px 0' }}>
          <label>Your Email:</label><br />
          <input type="email" style={{ width: '100%', padding: '8px' }} required />
        </div>
        <div style={{ margin: '15px 0' }}>
          <label>Message:</label><br />
          <textarea style={{ width: '100%', padding: '8px' }} rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;