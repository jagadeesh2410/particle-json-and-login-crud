// import React, { useState } from 'react';

// const Login = ({ onLogin, onSignup }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     onLogin({ username, password });
//   };

//   const handleSignupClick = () => {
//     onSignup(); // Trigger signup form display in App.js
//   };

//   return (
//     <div>
//       <form onSubmit={handleLoginSubmit}>
//         <h2>Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? <button onClick={handleSignupClick}>Signup</button></p>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';

const Login = ({ onLogin, onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='signup-switch' type="submit">Login</button>
      </form>
      <p>Don't have an account? <button className="button-signup"onClick={onSignup}>Signup</button></p>
    </div>
  );
};

export default Login;
