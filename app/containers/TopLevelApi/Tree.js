import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default class Tree extends PureComponent {
    renderTreeNode = (node) =>
        node
    render() {
        return (
            <ul className={styles.tree}>
                {React.Children.map(this.props.children, this.renderTreeNode)}
            </ul>
        );
    }
}

Tree.propTypes = {
    children: PropTypes.node,
};
