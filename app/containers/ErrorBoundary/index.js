import React from 'react';
import { Row, Col, Card } from 'antd';
import Wrapper from './Wrapper';
import Spacing from './Spacing';

import ErrorBoundary from './ErrorBoundary';
import MakeError from './MakeError';

const ShowErrorBoundary = () => (
    <Wrapper>
        <Row gutter={8}>
            <Col span={12}>
                <Spacing>
                    <Card title="index.js">
                        <pre>
                            {`
<ErrorBoundary>
    <MakeError />
</ErrorBoundary>
                            `}
                        </pre>
                    </Card>
                </Spacing>
                <Spacing>
                    <Card title="ErrorBoundary">
                        <pre>
                            {`
componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
}

render() {
    if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
}
                            `}
                        </pre>
                    </Card>
                </Spacing>
                <Spacing>
                    <Card title="MakeError">
                        <pre>
                            {`
const { error } = this.state;
if (error) {
    throw new Error('I crashed!');
}
return (
    <button onClick={this.handleClick}>
        click me, trigger the bug
    </button>
);
                            `}
                        </pre>
                    </Card>
                </Spacing>
            </Col>
            <Col span={12}>
                <Card title="显示">
                    <p>componentDidCatch(error, errorInfo) 生命周期</p>
                    <p>用来捕获组件异常, 避免某个组件出错影响整个组件树卸载</p>
                    <p>错误边界放置粒度取决于自己</p>
                    <ErrorBoundary>
                        <MakeError />
                    </ErrorBoundary>
                </Card>
            </Col>
        </Row>
    </Wrapper>
);

export default ShowErrorBoundary;
