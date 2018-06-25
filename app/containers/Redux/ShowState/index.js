import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ShowState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // num: 0,
        };
    }
    componentWillMount() {
        // componentWillMount
    }
    componentDidMount() {
        // componentDidMount
    }
    render() {
        const { TodoList } = this.props;
        return (
            <ul>
                {TodoList.map((item, index) => (
                    <li key={`${item.id}-${index.toString()}`}>{item.text}</li>
                ))}
            </ul>
        );
    }
}

ShowState.propTypes = {
    TodoList: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
        }),
    ),
};

const mapStateToProps = (state) => ({
    TodoList: state.todos.TodoList,
});

export default connect(mapStateToProps)(ShowState);
