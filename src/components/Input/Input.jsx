import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './Input.module.css';

const Input = () => {
  const [newUser, setNewUser] = useState({});
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isValid, setIsValid] = useState(true);

  const submitFormHandler = e => {
    e.preventDefault();
    if (enteredUsername.length === 0 || enteredAge < 1) setIsValid(false);

    setNewUser({
      userName: enteredUsername,
      age: enteredAge,
      id: crypto.randomUUID(),
    });
  };

  const usernameInputHandler = e => {
    setIsValid(true);
    setEnteredUsername(e.target.value);
  };

  const ageInputHandler = e => {
    setEnteredAge(e.target.value);
  };

  console.log(newUser);

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
        <input
          type="number"
          onChange={ageInputHandler}
          value={enteredAge}
          min="1"
          step="1"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default Input;
