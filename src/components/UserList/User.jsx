import React from 'react';
import styles from './User.module.css';

const User = props => {
  const deleteUser = () => {
    props.deleteUser(props.id);
  };

  return (
    <li className={styles.user}>
      {props.userName} ({props.age} years old)
      <div className={styles.delete} onClick={deleteUser}>
        X
      </div>
    </li>
  );
};

export default User;
