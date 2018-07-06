import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default class Tree extends React.PureComponent {
    renderTreeNode = (node) => node;

    render() {
        const { children } = this.props;
        return (
            <ul className={styles.tree}>
                {React.Children.map(children, this.renderTreeNode)}
            </ul>
        );
    }
}

Tree.propTypes = {
    children: PropTypes.node,
};
