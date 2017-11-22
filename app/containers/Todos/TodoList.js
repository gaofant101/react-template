import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TodoList extends PureComponent {
    componentWillMount() {
        // componentWillMount
    }
    componentDidMount() {
        // componentDidMount
    }
    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo, index) => (
                        /* eslint-disable */
                        <li
                          key={index.toString()}
                          onClick={() => this.props.onTodoClick(index)}
                          style={{
                              textDecoration: todo.completed ? 'line-through' : 'none',
                              cursor: todo.completed ? 'default' : 'pointer',
                          }}
                        >
                            {todo.text}
                        </li>
                        /* eslint-enable */
                    ))
                }
            </ul>
        );
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
};
