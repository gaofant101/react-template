import React, { PureComponent } from 'react';
// import axios from 'axioss';
import styles from './style.css';

export default class HelloAdmin extends PureComponent {
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
