import React, { useState } from 'react';
import NewUser from './components/NewUser/NewUser';
import UsersList from './components/Users/UsersList';

import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((prevUserList) => {
      return [newUser, ...prevUserList];
    });
  };

  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <UsersList data={users} />
    </div>
  );
}

export default App;
