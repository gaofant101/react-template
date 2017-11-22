import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends PureComponent {
    componentWillMount() {
        // componentWillMount
    }
    componentDidMount() {
        // componentDidMount
    }
    handleClick = () => {
        const text = this.input.value.trim();
        this.props.onAddClick(text);
        this.input.value = '';
    }
    render() {
        return (
            <div>
                <input type="text" ref={(input) => { this.input = input; }} />
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired,
};
