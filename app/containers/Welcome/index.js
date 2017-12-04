import React, { PureComponent } from 'react';
import axios from 'axioss';
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
        this.loadAxios();
    }
    loadGithub = (githubName) => {
        axios.get(`https://api.github.com/users/${githubName}/repos?type=all&sort=updated?name='welcome'`)
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    throw String(err);
                });
    }
    loadAxios = async () => {
        // Promise.all([this.loadGithub('evanhunt')]).then((data) => {
        //     console.log(data);
        // })
        const githubName = 'evanhunt';
        const data = await this.loadGithub(githubName);
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
