import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter } from './actions';
import { VisibilityFilters } from './constants';
import styles from './style.css';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

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
        const { dispatch, visibleTodos, visibilityFilter } = this.props;
        return (
            <div className={styles.box}>
                <AddTodo
                  onAddClick={(text) => dispatch(addTodo(text))}
                />
                <TodoList
                  todos={visibleTodos}
                  onTodoClick={(index) => dispatch(completeTodo(index))}
                />
                <Footer
                  filter={visibilityFilter}
                  onFilterChange={(nextFilter) => dispatch(setVisibilityFilter(nextFilter))}
                />
            </div>
        );
    }
}

Todos.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE',
    ]).isRequired,
    dispatch: PropTypes.func,
};

const selectTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter((todo) => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter((todo) => !todo.completed);
        default:
            return todos;
    }
};

const select = (state) => ({
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
});

export default connect(select)(Todos);
