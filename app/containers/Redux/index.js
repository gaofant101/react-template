/* eslint no-console: 0 */
import React, { PureComponent } from 'react';
import { Row, Col, Card } from 'antd';
import styles from './style.css';

import Todos from './Todos';
import ShowState from './ShowState';
import DevTools from '../DevTools';

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
        console.log(this.props);
    }
    render() {
        return (
            <div className={styles.box}>
                <Row className={styles.marginBtm20}>
                    <a href="http://cn.redux.js.org/index.html" target="_blank">
                        [ 原文 ] <code>Redux</code>文档
                    </a>
                </Row>
                <Row gutter={16} className={styles.marginBtm20}>
                    <Col span={8}>
                        <Card title="Add Todos">
                            <Todos />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="ShowState">
                            <ShowState />
                        </Card>
                    </Col>
                </Row>
                <DevTools />
            </div>
        );
    }
}
