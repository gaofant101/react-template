import React from 'react';
// import styles from './style.less';

export default class HelloAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };
    }

    componentDidMount() {
        this.setState(() => ({
            username: 'React 16.5',
        }));
    }

    clickMe = () => {
        console.log('comeback hoho22');
    };

    render() {
        const { username } = this.state;
        return (
            <div onClick={this.clickMe} role="presentation">
                <h1>Holle {username}</h1>
            </div>
        );
    }
}
