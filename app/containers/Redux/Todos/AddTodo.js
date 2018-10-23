import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.less';

export default class AddTodo extends Component {
    render() {
        const { onSubmitForm } = this.props;
        return (
            <form
                onSubmit={(e) => {
                    onSubmitForm(e);
                    this.input.value = '';
                }}
                className={styles.todosform}
            >
                <input
                    type="text"
                    name="text"
                    placeholder="add Todo"
                    ref={(input) => {
                        this.input = input;
                    }}
                />
                <button type="submit">提交</button>
            </form>
        );
    }
}

AddTodo.propTypes = {
    onSubmitForm: PropTypes.func,
};
