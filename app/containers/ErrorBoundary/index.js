import React from 'react';
import { Row, Col, Card } from 'antd';
import styles from './style.css';

import ErrorBoundary from './ErrorBoundary';
import MakeError from './MakeError';

// export default class ShowErrorBoundary extends React.PureComponent {
//     render() {
//         return (
//             <ErrorBoundary>
//                 <MakeError />
//             </ErrorBoundary>
//         );
//     }
// }

const ShowErrorBoundary = () => (
    <div className={styles.box}>
        <Row gutter={8}>
            <Col span={12}>
                <Card title="index.js" className={styles.cardUse}>
                    <pre>
                        {`
<ErrorBoundary>
    <MakeError />
</ErrorBoundary>
                        `}
                    </pre>
                </Card>
                <Card title="ErrorBoundary" className={styles.cardUse}>
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
                <Card title="MakeError" className={styles.cardUse}>
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
    </div>
);

export default ShowErrorBoundary;
