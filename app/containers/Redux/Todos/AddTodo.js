import React from 'react';
import PropTypes from 'prop-types';
// import styles from './style.css';

export const AddTodo = ({ onSubmitForm }) => (
    <form onSubmit={onSubmitForm}>
        <input type="text" name="text" />
        <button type="submit">提交</button>
    </form>
);

AddTodo.propTypes = {
    onSubmitForm: PropTypes.func,
};
