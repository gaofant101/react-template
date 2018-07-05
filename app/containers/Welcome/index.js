import React from 'react';
import styles from './style.css';

export default class HelloAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // username: '',
        };
    }
    componentDidMount() {
        // componentDidMount
    }
    clickMe = () => {
        console.log("i'm click");
    };
    render() {
        return (
            <div
                className={styles.hello}
                onClick={this.clickMe}
                role="presentation"
            >
                <h1>Holle React 16.4</h1>
            </div>
        );
    }
}
