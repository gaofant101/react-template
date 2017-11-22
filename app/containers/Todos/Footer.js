import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends PureComponent {
    componentWillMount() {
        // componentWillMount
    }
    componentDidMount() {
        // componentDidMount
    }
    renderFilter = (filter, name) => {
        if (filter === this.props.filter) {
            return name;
        }
        return (
            /* eslint-disable */
            <a href='#' onClick={(e) => { e.preventDefault(); this.props.onFilterChange(filter); }}>
                {name}
            </a>
            /* eslint-enable */
        );
    }
    render() {
        return (
            <p>
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL', 'All')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active')}
                .
            </p>
        );
    }
}

Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE',
    ]).isRequired,
};
