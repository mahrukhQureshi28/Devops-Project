import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just alert the form data
    alert(
      `Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );

    // Clear form fields after submit
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="name" style={styles.label}>Name:</label>
        <input
          style={styles.input}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="email" style={styles.label}>Email:</label>
        <input
          style={styles.input}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
        />

        <label htmlFor="phone" style={styles.label}>Phone Number:</label>
        <input
          style={styles.input}
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          pattern="[0-9]{10}"
          title="Please enter a 10-digit phone number"
          required
        />

        <label htmlFor="message" style={styles.label}>Message:</label>
        <textarea
          style={{ ...styles.input, height: 100 }}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here"
          required
        />

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 450,
    margin: '40px auto',
    padding: 30,
    border: '1px solid #ccc',
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    marginBottom: 25,
    color: '#222',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: 6,
    fontWeight: '600',
    color: '#333',
  },
  input: {
    padding: 10,
    marginBottom: 18,
    borderRadius: 5,
    border: '1px solid #aaa',
    fontSize: 16,
    resize: 'none',
  },
  button: {
    padding: 12,
    backgroundColor: '#007bff',
    color: '#fff',
    fontWeight: '700',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
    fontSize: 18,
  },
};

export default App;
