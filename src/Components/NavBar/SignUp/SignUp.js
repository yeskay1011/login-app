import React, { useState } from 'react';

const SignUp = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cpass, setCpass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input type="text" placeholder="First Name" value={fname} required onChange={(e) => setFname(e.target.value)} /><br></br>
        <input type="text" placeholder="Last Name" value={lname} required onChange={(e) => setLname(e.target.value)} /><br></br>
        <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} /><br></br>
        <input type="password" placeholder="Enter Password" value={pass} required onChange={(e) => setPass(e.target.value)} /><br></br>
        <input type="password" placeholder="Confirm Password" value={cpass} required onChange={(e) => setCpass(e.target.value)} /><br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
} 

export default SignUp;
