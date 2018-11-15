import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ TodoList }) => (
    <ul>
        {TodoList.map((item, index) => (
            <li key={`${item.id}-${index.toString()}`}>{item.text}</li>
        ))}
    </ul>
);

Todo.propTypes = {
    TodoList: PropTypes.array,
};
