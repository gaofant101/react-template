/* eslint no-console: 0 */
import React, { PureComponent } from 'react';
import { Row, Col, Card } from 'antd';
import DevTools from 'components/DevTools';
import Wrapper from './Wrapper';
import Spacing from './Spacing';

import Todos from './Todos';
import ShowState from './ShowState';
import LoadGithub from './LoadGithub';

export default class ReactSetState extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // num: 0,
        };
    }

    componentDidMount() {
        // console.log(this.props);
    }

    render() {
        return (
            <Wrapper>
                <Spacing>
                    <Row>
                        <a href="http://cn.redux.js.org/index.html" target="_blank">
                            [ 原文 ]<code>Redux</code>
                            文档
                        </a>
                    </Row>
                </Spacing>
                <Spacing>
                    <Row gutter={16}>
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
                </Spacing>
                <Spacing>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Add Todos">
                                <LoadGithub />
                            </Card>
                        </Col>
                    </Row>
                </Spacing>
                <DevTools />
            </Wrapper>
        );
    }
}
