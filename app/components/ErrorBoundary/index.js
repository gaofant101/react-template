import React from 'react';
import PropTypes from 'prop-types';

import Tips from './Tips';

/**
 * 错误边界
 * 此组建属于示例
 */
export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.log(`log: ${JSON.stringify(info)}`);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return <Tips>Something went wrong.</Tips>;
        }
        return children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node,
};
