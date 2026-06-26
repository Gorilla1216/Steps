"use client";
import React, { useState } from 'react';
import FormInput from '../components/input';


export default function Home() {
  // App.jsx
  // 1. Define local state for the inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // 2. Event handler for input changes
  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    
    // Quick inline validation demo
    if (val && !val.includes('@')) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted!\nUsername: ${username}\nEmail: ${email}`);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ddd' }}>
      <h2>Sign Up Form</h2>
      <form onSubmit={handleSubmit}>
        
      
        <FormInput
          id="username"
          label="Username"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        
        <FormInput
          id="email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={handleEmailChange}
          error={emailError}
        />

        <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}



