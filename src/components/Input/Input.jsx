import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './Input.module.css';

const Input = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isValid, setIsValid] = useState(true);

  const submitFormHandler = e => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0) {
      props.modal("Username can't be empty.");
      return;
    }

    if (enteredAge.trim().length === 0) {
      props.modal("Age can't be empty.");
      return;
    } else if (enteredAge < 1) {
      props.modal('Age must be greater than 0.');
      return;
    }

    const newUser = {
      userName: enteredUsername,
      age: enteredAge,
    };

    props.addUser(newUser);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameInputHandler = e => {
    setIsValid(true);
    setEnteredUsername(e.target.value);
  };

  const ageInputHandler = e => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitFormHandler}>
        <label htmlFor="">Username</label>
        <input
          className={`${!isValid && styles.invalid}`}
          type="text"
          onChange={usernameInputHandler}
          value={enteredUsername}
        />
        <label htmlFor="">Age (Years)</label>
        <input type="number" onChange={ageInputHandler} value={enteredAge} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default Input;
