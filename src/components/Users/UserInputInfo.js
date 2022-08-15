import React, { useState } from 'react';
import styles from './UserInputInfo.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal.js';

const UserInputInfo = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return; //return will stop the form submit handler
    }
    
    if (+userAge < 1) { //+userAge to guarantee that this variable will be a integer
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAdduser(userName, userAge); //sending data via props    

    //reset fields after submission
    event.target.reset();
    setUserName('');
    setUserAge('');
  };

  const usernameInputChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null); //If value is null the modal will not be shown
  };  

  return (
    <div>
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
                  <input type='text' id='username' onChange={usernameInputChangeHandler} classplaceholder='Username'></input>
              </div>
              <div className={styles['user-input']}>
                  <label htmlFor='age'>Age (Years)</label>
                  <input type='number' id='age' onChange={ageInputChangeHandler} classplaceholder='Age'></input>
              </div>
              <Button type="submit">Add User</Button>
          </div>
      </form>

    </div>
  );
};

export default UserInputInfo;