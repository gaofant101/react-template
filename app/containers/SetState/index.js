/* eslint no-console: 0 */
import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import styles from './style.css';

export default class ReactSetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['State.', 'Should.', 'Be.', 'Synchronous.'],
            cpList: [],
            cpListAsync: [],
            selection: '',
            selectionAsync: '',
        };
    }

    componentDidMount() {}
    onSelectAsync = (item) => {
        this.setState({
            selectionAsync: item,
        });
        this.setState({
            cpListAsync: this.state.cpListAsync.concat(
                this.state.selectionAsync,
            ),
        });
    };
    onSelect = (item) => {
        this.setState(
            {
                selection: item,
            },
            () => {
                this.setState({
                    cpList: this.state.cpList.concat(this.state.selection),
                });
            },
        );
    };
    render() {
        const { list, cpListAsync, cpList } = this.state;
        return (
            <div className={styles.box}>
                <Row className={styles.marginBtm20}>
                    <a
                        href="https://medium.com/react-ecosystem/how-to-handle-state-in-react-6f2d3cd73a0c"
                        target="_blank"
                    >
                        [ 原文 ] <code>React</code>源码剖析系列解密<code>
                            setState
                        </code>
                    </a>
                </Row>
                <Row gutter={16} className={styles.marginBtm20}>
                    <Col span={8}>
                        <Card title="点击列表查看state">
                            {/* eslint-disable */}
                            <ul>
                                {
                                    list.map((item) => (
                                        <li className={item === this.state.selectionAsync ? styles.selected : ''} key={item} onClick={() => this.onSelectAsync(item)}>
                                            {item}
                                        </li>
                                    ))
                                }
                            </ul>
                            {/* eslint-enable */}
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="异步state运行结果">
                            <ul>
                                {cpListAsync.map((item, index) => (
                                    <li key={`${item}${index.toString()}`}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="异步state运行结果">
                            <pre>
                                {`
onSelectAsync = (item) => {
    this.setState({
        selectionAsync: item,
    });
    this.setState({
        cpListAsync: this.state.cpListAsync.concat(this.state.selectionAsync),
    });
}
                                `}
                            </pre>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} className={styles.marginBtm20}>
                    <Col span={8}>
                        <Card title="点击列表查看state">
                            <ul>
                                {list.map((item) => (
                                    <li
                                        className={
                                            item === this.state.selection
                                                ? styles.selected
                                                : ''
                                        }
                                        key={item}
                                        onClick={() => this.onSelect(item)}
                                        role="presentation"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="异步state回调运行结果">
                            <ul>
                                {cpList.map((item, index) => (
                                    <li key={`${item}${index.toString()}`}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="异步state回调运行结果">
                            <pre>
                                {`
onSelect = (item) => {
    this.setState({
        selection: item,
    }, () => {
        this.setState({
            cpList: this.state.cpList.concat(this.state.selection),
        });
    });
}
                                    `}
                            </pre>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
