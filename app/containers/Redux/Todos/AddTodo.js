import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

export default class AddTodo extends Component {
    render() {
        const { onSubmitForm } = this.props;
        return (
            <Form
                onSubmit={(e) => {
                    onSubmitForm(e);
                    this.input.value = '';
                }}
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
            </Form>
        );
    }
}

AddTodo.propTypes = {
    onSubmitForm: PropTypes.func,
};
