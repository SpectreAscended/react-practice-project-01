import React from 'react';
import styles from './UserList.module.css';
import Card from '../UI/Card';
import User from './User';

const UserList = props => {
  console.log(props.users);
  const user = props.users.map(user => {
    return <User userName={user.userName} age={user.age} key={user.id} />;
  });

  return (
    <Card>
      <ul className={styles.users}>{user}</ul>
    </Card>
  );
};

export default UserList;
