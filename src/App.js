import React, { useState } from 'react';
import UserInputInfo from "./components/Users/UserInputInfo";
import UsersList from "./components/Users/UsersList";


const App = (props) => {

  const initialListofUsers = [
    {
      id: 'initial1',
      text: 'Jonh Emerson (33 Years Old)',
    },
    {
      id: 'initial2',
      text: 'Valentina Clark (30 Years Old)',
    },
  ];
  
  const [ListofUsers, setListOfUsers] = useState(initialListofUsers);

  const AddItemHandler = (userName, userAge) => {
    const newList = ListofUsers.concat({
      text: userName + " ( " + userAge + " Years Old)",
      id: Math.random().toString(),
    });

    setListOfUsers(newList);
  };

  // Using state to delete and add users
  const DeleteItemHandler = userId => {
    setListOfUsers( prevUsers => {
      // .filter loops through an array including or excluding elements 
      // inside that array based on a provided condition
      const updateUsers = prevUsers.filter(user => user.id !== userId);
      return updateUsers;
    });
  };

  // Checking if there are values to be shown before returing it
  let content = (
    <div>
      <p style={{ textAlign: 'center', fontWeight: 'bold' }}>No users found</p>
      <p style={{ textAlign: 'center' }}>You can add an user using the form above</p>
    </div>
  );  
  if (ListofUsers.length > 0) {
    content  = (
      <UsersList items={ListofUsers} onDeleteItem={DeleteItemHandler} />
    );
  }
  
  return (
    <React.Fragment>
      <section id="user-input-form">
        <UserInputInfo onAdduser={AddItemHandler}/>
      </section>
      <section id="users-list">
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
