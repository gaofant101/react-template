import React from 'react';
import styles from './style.css';

export default class HelloAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };
    }

    componentDidMount() {
        this.setState(() => ({
            username: 'React 16.4',
        }));
    }

    clickMe = () => {
        console.log("i'm click");
    };

    render() {
        const { username } = this.state;
        return (
            <div
                className={styles.hello}
                onClick={this.clickMe}
                role="presentation"
            >
                <h1>Holle {username}</h1>
            </div>
        );
    }
}
