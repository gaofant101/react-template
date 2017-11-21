/* eslint no-console: 0 */
import React, { PureComponent } from 'react';
import { Row, Col, Card } from 'antd';
import styles from './style.css';

export default class ReactSetState extends PureComponent {
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
    componentWillMount() {
        this.setState({
            num: this.state.num + 1,
        });
        console.log(this.state.num);
        this.setState({
            num: this.state.num + 1,
        });
        console.log(this.state.num);
        setTimeout(() => {
            this.setState({
                num: this.state.num + 1,
            });
            console.log(this.state.num);
        });
        setTimeout(() => {
            this.setState({
                num: this.state.num + 1,
            });
            console.log(this.state.num);
        });
        this.setState({
            selection: this.state.list[0],
            selectionAsync: this.state.list[0],
        });
    }
    componentDidMount() {
        // 1
    }
    onSelectAsync = (item) => {
        this.setState({
            selectionAsync: item,
        });
        this.setState({
            cpListAsync: this.state.cpListAsync.concat(this.state.selectionAsync),
        });
    }
    onSelect = (item) => {
        this.setState({
            selection: item,
        }, () => {
            this.setState({
                cpList: this.state.cpList.concat(this.state.selection),
            });
        });
    }
    render() {
        const list = this.state.list;
        const cpListAsync = this.state.cpListAsync;
        const cpList = this.state.cpList;
        return (
            <div className={styles.box}>
                <Row className={styles.marginBtm20}>
                    <a href="https://medium.com/react-ecosystem/how-to-handle-state-in-react-6f2d3cd73a0c" target="_blank">
                        [ 原文 ] 怎么处理<code>React</code>中的<code>state</code>
                    </a>
                </Row>
                <Row className={styles.marginBtm20}>
                    <a href="https://medium.com/react-ecosystem/how-to-handle-state-in-react-6f2d3cd73a0c" target="_blank">
                        [ 原文 ] <code>React</code>源码剖析系列解密<code>setState</code>
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
                                {
                                    cpListAsync.map((item, index) => (
                                        <li key={`${item}${index.toString()}`}>
                                            {item}
                                        </li>
                                    ))
                                }
                            </ul>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="异步state运行结果">
                            <pre>
                                {
                                `
onSelectAsync = (item) => {
    this.setState({
        selectionAsync: item,
    });
    this.setState({
        cpListAsync: this.state.cpListAsync.concat(this.state.selectionAsync),
    });
}
                                `
                                }
                            </pre>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} className={styles.marginBtm20}>
                    <Col span={8}>
                        <Card title="点击列表查看state">
                            {/* eslint-disable */}
                            <ul>
                                {
                                    list.map((item) => (
                                        <li className={item === this.state.selection ? styles.selected : ''} key={item} onClick={() => this.onSelect(item)}>
                                            {item}
                                        </li>
                                    ))
                                }
                            </ul>
                            {/* eslint-enable */}
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="异步state回调运行结果">
                            <ul>
                                {
                                    cpList.map((item, index) => (
                                        <li key={`${item}${index.toString()}`}>
                                            {item}
                                        </li>
                                    ))
                                }
                            </ul>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="异步state回调运行结果">
                            <pre>
                                {
                                    `
onSelect = (item) => {
    this.setState({
        selection: item,
    }, () => {
        this.setState({
            cpList: this.state.cpList.concat(this.state.selection),
        });
    });
}
                                    `
                                }
                            </pre>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
