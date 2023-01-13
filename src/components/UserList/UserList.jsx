import React from 'react';
import styles from './UserList.module.css';
import Card from '../UI/Card';
import User from './User';

const UserList = props => {
  let user;
  console.log(props.users);

  if (props.users.length === 0) {
    user = <li>No users</li>;
  }

  user = props.users.map(user => {
    return (
      <User
        userName={user.userName}
        age={user.age}
        key={user.id}
        id={user.id}
        deleteUser={props.onDelete}
      />
    );
  });

  return (
    <Card>
      <ul className={styles.users}>{user}</ul>
    </Card>
  );
};

export default UserList;
