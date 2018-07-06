/* eslint no-console: 0 */
import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import styles from './style.css';

export default class ReactSetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            list: ['State.', 'Should.', 'Be.', 'Synchronous.'],
            cpList: [],
            cpListAsync: [],
            selection: '',
            selectionAsync: '',
        };
    }

    componentDidMount() {
        const { num } = this.state;
        this.setState({
            num: 3,
        });
        console.log(num);
    }

    onSelectAsync = (item) => {
        const { cpListAsync, selectionAsync } = this.state;
        const newcpListAsync = cpListAsync.concat(selectionAsync);
        this.setState({
            selectionAsync: item,
            cpListAsync: newcpListAsync,
        });
    };

    onSelect = (item) => {
        const { cpList } = this.state;
        this.setState(() => ({
            cpList: cpList.concat(item),
        }));
    };

    render() {
        const { list, cpListAsync, cpList, selection } = this.state;
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
const { cpListAsync, selectionAsync } = this.state;
const newcpListAsync = cpListAsync.concat(selectionAsync);
this.setState({
    selectionAsync: item,
    cpListAsync: newcpListAsync,
});
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
                                            item === selection
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
const { cpList } = this.state;
this.setState(() => ({
    cpList: cpList.concat(item),
}));
                                    `}
                            </pre>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
