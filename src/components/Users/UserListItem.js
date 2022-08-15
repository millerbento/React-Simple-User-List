import React from 'react';
import styles from './UserListItem.module.css';

const UserListItem = (props) => {
    const deleteItemHandler = () => {
        props.onDelete(props.id);
    }

    return (
        <ul className={styles['user-list']}>
            <li className={styles['user-item']} onClick={deleteItemHandler}>
                {props.children}
            </li>
        </ul>
    );
};

export default UserListItem;