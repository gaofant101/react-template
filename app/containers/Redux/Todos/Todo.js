import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.less';

export const Todo = ({ TodoList }) => (
    <ul className={styles.list}>
        {TodoList.map((item, index) => (
            <li key={`${item.id}-${index.toString()}`}>{item.text}</li>
        ))}
    </ul>
);

Todo.propTypes = {
    TodoList: PropTypes.array,
};
