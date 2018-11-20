import React from 'react';
import { getApiIO } from '@services/api';
import Wrapper from './Wrapper';

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
        getApiIO().then((res) => {
            console.log(res.data);
        });
    }

    clickMe = () => {
        console.log('comeback hoho22');
    };

    render() {
        const { username } = this.state;
        return (
            <Wrapper onClick={this.clickMe} role="presentation">
                <h1>Holle {username}</h1>
            </Wrapper>
        );
    }
}
