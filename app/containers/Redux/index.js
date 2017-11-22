/* eslint no-console: 0 */
import React, { PureComponent } from 'react';
import { Row, Col, Card } from 'antd';
import styles from './style.css';

export default class ReactSetState extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        };
    }
    componentWillMount() {
        // componentWillMount
    }
    componentDidMount() {
        // componentDidMount
    }
    render() {
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
                            1
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="异步state运行结果">
                            2
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16} className={styles.marginBtm20}>
                    <Col span={8}>
                        <Card title="点击列表查看state">
                            1
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
