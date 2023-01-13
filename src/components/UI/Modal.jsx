import React from 'react';
import styles from './Modal.module.css';

const Modal = props => {
  return (
    <>
      <div className={styles.modal} onClick={props.modal}></div>
      <div className={styles['modal-card']}>
        <h2>Invalid input</h2>
        <div className={styles['modal-container']}>
          <h3>{props.children}</h3>
          <button className={styles.button} onClick={props.modal}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
