import React from 'react';
import PropTypes from 'prop-types';

export default class TreeNode extends React.PureComponent {
    renderTreeNode = (node) =>
        // 渲染子节点
        node;

    renderChildren = (props) =>
        /**
         * 判断有没有子类Children
         * 如果有追加ul
         * 没有返回null
         */
        props.children ? (
            <ul> {React.Children.map(props.children, this.renderTreeNode)} </ul>
        ) : null;

    render() {
        const { title } = this.props;
        const newChildren = this.renderChildren(this.props);
        return (
            <li>
                {title}
                {newChildren}
            </li>
        );
    }
}

TreeNode.propTypes = {
    title: PropTypes.node,
};
