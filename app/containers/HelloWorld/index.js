/* eslint no-console:0 */
import React from 'react';
import styles from './style.css';

export default class HelloWorld extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    // static propTypes = {
    //     form: React.PropTypes.object,
    // }
    // constructor(props) {
    //     super(props);
    // }
    // state = {
    //     dataSource: [],
    // }
    componentWillMount() {
        // 初始化数据
        console.log('hello');
    }
    render() {
        return (
            <div className={styles.hello}>
                <h1>Hello World !</h1>
            </div>
        );
    }
}
