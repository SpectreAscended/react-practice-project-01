import React, { useState } from 'react';
import Input from './components/Input/Input';
import UserList from './components/UserList/UserList';
import Modal from './components/UI/Modal';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Something went wrong');
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

  const userListHandler = newUserData => {
    const newUser = {
      userName: newUserData.userName,
      age: newUserData.age,
      id: crypto.randomUUID(),
    };

    setUserList(users => {
      return [newUser, ...users];
    });
  };
  console.log(errorMessage);
  console.log(modalOpen);

  const modalHandler = message => {
    setModalOpen(open => !open);
    setErrorMessage(message);
    console.log('clicked');
  };

  return (
    <>
      {modalOpen && <Modal modal={modalHandler}>{errorMessage}</Modal>}
      <Input addUser={userListHandler} modal={modalHandler} />
      <UserList users={userList} />
    </>
  );
};

export default App;
