import React, { Component } from 'react';
import styles from './style.css';

export default class HelloAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
            <div className={styles.hello}>
                <h1>Holle React</h1>
            </div>
        );
    }
}
