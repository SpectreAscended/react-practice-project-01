import React, { useState } from 'react';
import Input from './components/Input/Input';
import UserList from './components/UserList/UserList';

const App = () => {
  const [userList, setUserList] = useState([
    {
      userName: 'Cory',
      age: '35',
      id: 'user-01',
    },
    {
      userName: 'Jane',
      age: '32',
      id: 'user-02',
    },
    {
      userName: 'Daniel',
      age: '35',
      id: 'user-03',
    },
  ]);

  const userListHandler = newUser => {
    setUserList(users => {
      return [newUser, ...users];
    });
  };

  return (
    <>
      <Input addUser={userListHandler} />
      <UserList users={userList} />
    </>
  );
};

export default App;
