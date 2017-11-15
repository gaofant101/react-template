import React from 'react';
// import axios from 'axioss';
import styles from './style.css';

export default class HelloAdmin extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    state = {
        username: '',
    }
    componentWillMount() {
        // 1
        // axios.get('./data.js')
        //     .then((res) => {
        //         console.log(res);
        //     });
    }
    render() {
        return (
            <div className={styles.hello}>
                <h1>你好!</h1>
            </div>
        );
    }
}
