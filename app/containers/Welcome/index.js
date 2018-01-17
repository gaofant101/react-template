import React, { Component } from 'react';
import { getGithub } from 'services/api';
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
        this.loadAxios();
    }
    loadAxios = async () => {
        const username = 'evanhunt';
        const data = await getGithub(username);
        console.log(data);
    }
    render() {
        return (
            <div className={styles.hello}>
                <h1>Holle React</h1>
            </div>
        );
    }
}
