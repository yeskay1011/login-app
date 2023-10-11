import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} /><br></br>
      <input type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} /><br></br>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignIn;
