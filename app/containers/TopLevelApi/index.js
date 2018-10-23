/* eslint no-console: 0 */
import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import Tree from './defaultIndex';
import styles from './style.less';

import { treeData } from './treeList';
const { TreeNode } = Tree;

export default class TopLevelApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // num: 0,
        };
    }

    componentDidMount() {
        // componentDidMount
    }

    treeLoop = (data) =>
        data.map((item) => {
            const title = <span>{item.title}</span>;
            if (item.children) {
                return (
                    <TreeNode key={item.key} title={title}>
                        {this.treeLoop(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.key} title={title} />;
        });

    render() {
        return (
            <div className={styles.box}>
                <Row className={styles.marginBtm20}>
                    <a
                        href="https://reactjs.org/docs/react-api.html"
                        target="_blank"
                    >
                        [ 原文 ] React Top-Level API
                    </a>
                </Row>
                <Row gutter={16} className={styles.marginBtm20}>
                    <Col span={12}>
                        <Card title="示例">
                            <pre>
                                {`
import Tree from './defaultIndex';
import { treeData } from './treeList';

const TreeNode = Tree.TreeNode;
...
treeLoop = (data) => data.map((item) => {
    const title = <span>{item.title}</span>;
    if (item.children) {
        return (
            <TreeNode key={item.key} title={title}>
                {this.treeLoop(item.children)}
            </TreeNode>
        );
    }
    return <TreeNode key={item.key} title={title} />;
})
...
<Tree>
    {this.treeLoop(treeData)}
</Tree>
...
                                    `}
                            </pre>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="效果">
                            <Tree>{this.treeLoop(treeData)}</Tree>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} className={styles.marginBtm20}>
                    <Col span={8}>
                        <Card title="代码示例 defaultIndex">
                            <pre>
                                {`
import Tree from './Tree';
import TreeNode from './TreeNodec';
Tree.TreeNode = TreeNode;

export default Tree;

                                    `}
                            </pre>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="代码示例 Tree">
                            <pre>
                                {`
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from '';

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

                                `}
                            </pre>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="代码示例 TreeNode">
                            <pre>
                                {`
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TreeNode extends PureComponent {
    renderTreeNode = (node) =>
        // 渲染子节点
        node
    renderChildren = (props) =>
        /**
         * 判断有没有子类Children
         * 如果有追加ul
         * 没有返回null
         */
        props.children ? <ul>{React.Children.map(this.props.children, this.renderTreeNode)}</ul> : null
    render() {
        const newChildren = this.renderChildren(this.props);
        return (
            <li>
                {this.props.title}
                {newChildren}
            </li>
        );
    }
}

TreeNode.propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
};

                                `}
                            </pre>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
