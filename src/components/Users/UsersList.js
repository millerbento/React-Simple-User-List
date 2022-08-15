import React from 'react';
import styles from './UsersList.module.css';
import UserListItem from './UserListItem.js';

const UsersList = (props) => {
    return (
      <div className={styles['user-results-wrapper']}>
          {props.items.map((user) => (
            <UserListItem 
                key={user.id}
                id={user.id}
                onDelete={props.onDeleteItem}
                onAdd={props.onAddItem}
            >
              {user.text}
            </UserListItem>
          ))}
      </div>
    );
};

export default UsersList;