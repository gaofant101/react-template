import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.css';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
        console.log(`log: ${JSON.stringify(info)}`);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1 className={styles.tips}>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node,
};
