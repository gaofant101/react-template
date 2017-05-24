/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router';

export default class Content extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Link to="/">HomePage</Link>
            </div>
        );
    }
}
