import React, { useState, useRef } from 'react';
import styles from './UserInputInfo.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal.js';

const UserInputInfo = (props) => {
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();  

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      return; //return will stop the form submit handler
    }
    
    if (+enteredUserAge < 1) { //+userAge to guarantee that this variable will be a integer
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAdduser(enteredUserName, enteredUserAge); //sending data via props    

    //reset fields after submission
    event.target.reset();
  };

  const errorHandler = () => {
    setError(null); //If value is null the modal will not be shown
  };  

  return (
    <React.Fragment>
      {/* && checking if error is not null, if so, returns the error modal */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )} 
      <form onSubmit={formSubmitHandler}>
          <div className={styles['user-input-wrapper']}>
              <div className={styles['user-input']}>
                  <label htmlFor='username'>Username</label>
                  <input type='text' id='username' ref={nameInputRef} classplaceholder='Username'></input>
              </div>
              <div className={styles['user-input']}>
                  <label htmlFor='age'>Age (Years)</label>
                  <input type='number' id='age' ref={ageInputRef} classplaceholder='Age'></input>
              </div>
              <Button type="submit">Add User</Button>
          </div>
      </form>
    </React.Fragment>
  );
};

export default UserInputInfo;