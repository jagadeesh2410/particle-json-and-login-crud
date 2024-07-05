

// import React, { useState } from 'react';

// const Signup = ({ onSignup }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSignupSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await onSignup({ username, password, email });
//       // Clear form fields after successful signup
//       setUsername('');
//       setPassword('');
//       setEmail('');
//     } catch (error) {
//       console.error('Signup error:', error);
//       alert('Signup failed.');
//     }
//   };

//   return (
//     <form onSubmit={handleSignupSubmit}>
//       <h2>Signup</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Signup</button>
//     </form>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import '../styles.css'

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSignup({ username, password, email });
      // Clear form fields after successful signup
      setUsername('');
      setPassword('');
      setEmail('');
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed.');
    }
  };

  return (
    <form onSubmit={handleSignupSubmit}>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
