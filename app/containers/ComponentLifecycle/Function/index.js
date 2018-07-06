import React from 'react';
import { Row, Collapse, Button } from 'antd';
import styles from './style.css';

const { Panel } = Collapse;

export default class LifeCycleFunction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'DevTool console查看组件装载生命周期',
        };
    }

    static getDerivedStateFromProps() {
        /**
         * static getDerivedStateFromProps(props, state)
         * 在 render() 之前调用
         * 初始状态或者状态更新都会调用此生命周期
         * gDSFP 是静态方法, 不能调用this
         * 如果声明此生命周期, 都应该返回状态
         * if (props.userID !== state.prevPropsUserID) {
         *     return {
         *         prevPropsUserID: props.userID,
         *         email: props.defaultEmail
         *     };
         * }
         * return null;
         */
        console.log('组件初次装载, 或者`props` 要更新时');
        return null;
    }

    componentDidMount() {
        /**
         * componentDidMount
         * 组件装载后调用
         * 在这里设置状态会触发重新渲染
         * 建议 这里适合从服务端获取数据
         */
        console.log('组件初次装载完成 \n \n');
    }

    shouldComponentUpdate() {
        /**
         * shouldComponentUpdate(nextProps, nextState)
         * return true 组件重新渲染
         * return false 组件不会重新渲染 (componentDidUpdate render componentDidUpdate 不会触发)(未来 false 也触发重新渲染)
         * 比较新旧属性返回状态,来决定组件是否更新
         * PureComponent 实现了浅比较(如果数据结构深,比较不起作用)
         */
        console.log('组件状态改变, 准备更新');
        return true;
    }

    getSnapshotBeforeUpdate() {
        /**
         * getSnapshotBeforeUpdate(prevProps, prevState)
         * 在 VDOM 发生变化之前调用
         * 组件初次加载不调用此生命周期
         * 此组件返回更新的状态
         * 返回值被传递到 componentDidUpdate 作为第三个参数
         * shouldComponentUpdate 返回 flase时, 此方法不会被调用
         *
         * getSnapshotBeforeUpdate(prevProps, prevState) {
         *     // Are we adding new items to the list?
         *     // Capture the scroll position so we can adjust scroll later.
         *     if (prevProps.list.length < this.props.list.length) {
         *         const list = this.listRef.current;
         *         return list.scrollHeight - list.scrollTop;
         *     }
         *     return null;
         * }
         *
         * componentDidUpdate(prevProps, prevState, snapshot) {
         *     // If we have a snapshot value, we've just added new items.
         *     // Adjust scroll so these new items don't push the old ones out of view.
         *     // (snapshot here is the value returned from getSnapshotBeforeUpdate)
         *         if (snapshot !== null) {
         *         const list = this.listRef.current;
         *         list.scrollTop = list.scrollHeight - snapshot;
         *     }
         * }
         */
        console.log('VDOM 即将变化');
        return null;
    }

    componentDidUpdate() {
        /**
         * componentDidUpdate(prevProps, prevState, snapshot)
         * 组件更新后立即调用
         * 初始化的时候不会调用该方法
         * shouldComponentUpdate 返回 false时 此方法不会被调用
         */
        console.log('组件更新完成 \n \n');
    }

    componentWillUnmount() {
        /**
         * componentWillUnmount
         * 组件卸载和销毁之前立即调用
         * 在这里处理清理工作
         * 例如解除定时器, 取消网络请求
         */
        console.log('组件准备卸载和销毁');
    }

    componentDidCatch() {
        /**
         * componentDidCatch(error, info)
         * 捕获组件错误
         */
        // Display fallback UI
        // this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
        console.log('组件放生错误');
    }

    handlerClick = () => {
        const { name } = this.state;
        this.setState({
            name:
                name === 'DevTool console查看组件装载生命周期'
                    ? 'DevTool console查看组件更新生命周期'
                    : 'DevTool console查看组件装载生命周期',
        });
    };

    render() {
        const { name } = this.state;
        return (
            <div className={styles.box}>
                <Row className={styles.marginBtm20}>
                    <Button type="primary" onClick={this.handlerClick}>
                        触发更新
                    </Button>
                </Row>
                <Row className={styles.marginBtm20}>{name}</Row>
                <Row className={styles.marginBtm20}>
                    <Collapse defaultActiveKey={['1']} accordion>
                        <Panel
                            header="static getDerivedStateFromProps 组件装载前或者状态更新立即调用(属于不常用API 具体用例查看官网)"
                            key="1"
                        >
                            <pre>
                                {`
static getDerivedStateFromProps() {
    /**
     * static getDerivedStateFromProps(props, state)
     * 在 render() 之前调用
     * 初始状态或者状态更新都会调用此生命周期
     * gDSFP 是静态方法, 不能调用this
     * 如果声明此生命周期, 都应该返回状态
     * if (props.userID !== state.prevPropsUserID) {
     *     return {
     *         prevPropsUserID: props.userID,
     *         email: props.defaultEmail
     *     };
     * }
     * return null;
     */
    return null;
}
                                    `}
                            </pre>
                        </Panel>
                        <Panel
                            header="componentDidMount 组件装载后立即调用"
                            key="2"
                        >
                            <pre>
                                {`
componentDidMount() {
    /**
     * componentDidMount
     * 组件装载后调用
     * 在这里设置状态会触发重新渲染
     * (官网建议 这里适合从服务端获取数据)
     */
}
                                    `}
                            </pre>
                        </Panel>
                        <Panel
                            header="shouldComponentUpdate 件接收新的属性和状态, 组件渲染前调用"
                            key="3"
                        >
                            <pre>
                                {`
shouldComponentUpdate() {
    /**
     * shouldComponentUpdate(nextProps, nextState)
     * return true 组件重新渲染
     * return false 组件不会重新渲染 (componentDidUpdate render componentDidUpdate 不会触发)(未来 false 也触发重新渲染)
     * 比较新旧属性返回状态,来决定组件是否更新
     * PureComponent 实现了浅比较(如果数据结构深,比较不起作用)
     * 禁止在此方法调用 setState, 会造成循环调用,直至浏览器内存耗光,崩溃
     */
    return true;
}
                                    `}
                            </pre>
                        </Panel>
                        <Panel
                            header="getSnapshotBeforeUpdate VDOM发生变化前调用(属于不常用API 具体用例查看官网)"
                            key="4"
                        >
                            <pre>
                                {`
getSnapshotBeforeUpdate() {
    /**
     * getSnapshotBeforeUpdate(prevProps, prevState)
     * 在 VDOM 发生变化之前调用
     * 组件初次加载不调用此生命周期
     * 此组件返回更新的状态
     * 返回值被传递到 componentDidUpdate 作为第三个参数
     * shouldComponentUpdate 返回 flase时, 此方法不会被调用
     *
     * getSnapshotBeforeUpdate(prevProps, prevState) {
     *     // Are we adding new items to the list?
     *     // Capture the scroll position so we can adjust scroll later.
     *     if (prevProps.list.length < this.props.list.length) {
     *         const list = this.listRef.current;
     *         return list.scrollHeight - list.scrollTop;
     *     }
     *     return null;
     * }
     *
     * componentDidUpdate(prevProps, prevState, snapshot) {
     *     // If we have a snapshot value, we've just added new items.
     *     // Adjust scroll so these new items don't push the old ones out of view.
     *     // (snapshot here is the value returned from getSnapshotBeforeUpdate)
     *         if (snapshot !== null) {
     *         const list = this.listRef.current;
     *         list.scrollTop = list.scrollHeight - snapshot;
     *     }
     * }
     */
    console.log('VDOM 即将变化');
    return null;
}
                                    `}
                            </pre>
                        </Panel>
                        <Panel
                            header="componentDidUpdate 组件更新后立即调用"
                            key="5"
                        >
                            <pre>
                                {`
componentDidUpdate() {
    /**
     * componentDidUpdate(prevProps, prevState, snapshot)
     * 组件更新后立即调用
     * 初始化的时候不会调用该方法
     * shouldComponentUpdate 返回 false时 此方法不会被调用
     */
}
                                    `}
                            </pre>
                        </Panel>
                        <Panel
                            header="componentWillUnmount 组件卸载和销毁之前立即调用"
                            key="6"
                        >
                            <pre>
                                {`
componentWillUnmount() {
    /**
     * componentWillUnmount
     * 组件卸载和销毁之前立即调用
     * 在这里处理清理工作
     * 例如解除定时器, 取消网络请求
     */
}
                                    `}
                            </pre>
                        </Panel>
                        <Panel
                            header="componentDidCatch 组件发生错误立即调用"
                            key="7"
                        >
                            <pre>
                                {`
componentDidCatch(error, info) {
    /**
     * componentDidCatch(error, info)
     * 捕获组件错误
     */
    // Display fallback UI
    // this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
}
                                    `}
                            </pre>
                        </Panel>
                    </Collapse>
                </Row>
                <Row className={styles.marginBtm20}>
                    <img
                        src="https://cdn-images-1.medium.com/max/1600/0*OoDfQ7pzAqg6yETH."
                        alt="react 生命周期图"
                    />
                </Row>
            </div>
        );
    }
}
