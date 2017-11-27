import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodo } from './actions';

import { Todo } from './Todo';
import { AddTodo } from './AddTodo';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        };
    }
    componentWillMount() {
        // componentWillMount
    }
    componentDidMount() {
        // componentDidMount
    }
    render() {
        return (
            <div>
                <AddTodo onSubmitForm={this.props.onAddTodo} />
                <Todo TodoList={this.props.TodoList} />
            </div>
        );
    }
}

Todos.propTypes = {
    TodoList: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
        })
    ),
    onAddTodo: PropTypes.func,
};

const mapStateToProps = (state) => ({
    TodoList: state.todos.TodoList,
});

const mapDispatchToProps = (dispatch) => ({
    onAddTodo: (evt) => {
        if (evt !== undefined && evt.preventDefault) evt.preventDefault();
        if (evt.target.text.value.trim() === '') return;
        dispatch(addTodo(evt.target.text.value));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Todos);
