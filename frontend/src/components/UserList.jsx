import React, { useState } from 'react';
import '../styles.css';
import axios from 'axios';

const UserList = ({ users, fetchUsers, onLogout }) => {
  const [editingUser, setEditingUser] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleEditClick = (user) => {
    setEditingUser(user);
    setUsername(user.username);
    setEmail(user.email);
  };

  const handleSave = async () => {
    try {
      if (editingUser) {
        await axios.put(`http://localhost:3000/users/${editingUser.id}`, { username, email, password });
        setEditingUser(null);
      } else {
        await axios.post('http://localhost:3000/users', { username, email, password });
        setIsAdding(false);
      }
      fetchUsers();
    } catch (error) {
      console.error('Error saving user:', error.response?.data || error.message);
      alert('Error saving user.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error.response?.data || error.message);
      alert('Error deleting user.');
    }
  };

  const handleAddUser = () => {
    setIsAdding(true);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='container-userlist'>
      <h2>User List</h2>
      <button className='button-logout' onClick={onLogout}>Logout</button>
      <button className='button-add' onClick={handleAddUser}>Add User</button>
      {isAdding && (
        <div>
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
          <button className='button-add' onClick={handleSave}>Save</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                ) : (
                  user.username
                )}
              </td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <>
                    <button className='button-edit' onClick={() => handleEditClick(user)}>Edit</button>
                    <button className='button-delete' onClick={() => handleDelete(user.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
