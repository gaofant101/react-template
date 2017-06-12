/* eslint no-console:0 */
import React from 'react';
import { Link } from 'react-router';

export default class Organization extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <h1>page</h1>
                <Link to="/">go to HomePage</Link>
            </div>
        );
    }
}
