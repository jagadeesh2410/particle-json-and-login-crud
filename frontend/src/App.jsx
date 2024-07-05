import React, { useState } from 'react';
import axios from 'axios';
import Signup from './components/Signup';
import Login from './components/Login';
import UserList from './components/UserList';
import './styles.css';
import Particlebg from './components/particlebg';

const App = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [showSignup, setShowSignup] = useState(false);

  const handleSignup = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/signup', data);
      alert(response.data.message);
      const loginResponse = await axios.post('http://localhost:3000/login', data);
      setUser(data.username);
      alert(loginResponse.data.message);
      fetchUsers();
      setShowSignup(false);
    } catch (error) {
      console.error('Signup error:', error.response?.data || error.message);
      alert(`Signup failed: ${error.response?.data.message || error.message}`);
    }
  };

  const handleLogin = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/login', data);
      setUser(data.username);
      alert(response.data.message);
      fetchUsers();
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      alert(`Login failed: ${error.response?.data.message || error.message}`);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Failed to fetch users.');
    }
  };

  return (
    <>
      <Particlebg />
      <div className="container">
        {!user && !showSignup ? (
          <Login onLogin={handleLogin} onSignup={() => setShowSignup(true)} />
        ) : !user && showSignup ? (
          <Signup onSignup={handleSignup} />
        ) : (
          <UserList users={users} fetchUsers={fetchUsers} onLogout={handleLogout} />
        )}
      </div>
    </>
  );
};

export default App;
