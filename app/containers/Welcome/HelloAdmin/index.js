import React from 'react';
import styles from './style.css';

export default class HelloAdmin extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    state = {
        username: '',
    }
    componentWillMount() {
        // 1
    }
    render() {
        return (
            <div className={styles.hello}>
                <h1>你好1!</h1>
            </div>
        );
    }
}
