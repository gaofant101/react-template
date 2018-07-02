import React from 'react';

export default class MakeError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
        };
    }
    handleClick = () => {
        this.setState({
            error: true,
        });
    };
    render() {
        const { error } = this.state;
        if (error) {
            throw new Error('I crashed!');
        }
        return (
            <button onClick={this.handleClick}>
                click me, trigger the bug
            </button>
        );
    }
}
