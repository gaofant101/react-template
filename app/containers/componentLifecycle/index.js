/* eslint no-console: 0 */
import React, { PureComponent } from 'react';
import { Row, Collapse, Button, Spin } from 'antd';

const Panel = Collapse.Panel;

export default class LifeCycle extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            flag: 'false',
            name: 'DevTool console查看组件装载生命周期',
            loading: true,
        };
    }
    componentWillMount() {
        /**
         * componentWillMount
         * 组件装载前调用
         * 在这里同步设置状态不会触发重新渲染
         */
        console.log('生命周期: componentWillMount 组件装载前立即调用');
    }
    componentDidMount() {
        /**
         * componentDidMount
         * 组件装载后调用
         * 在这里设置状态会触发重新渲染
         * (官网建议 这里适合从服务端获取数据)
         */
        console.log('生命周期: componentDidMount 组件装载后立即调用');
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 500);
    }
    componentWillReceiveProps() {
        /**
         * componentWillReceiveProps(nextProps)
         * 已经装载的组件,接收新的属性前调用
         * !!即使属性没有变化,React可能也会调用该方法,父级组件可能会引起组件的渲染
         * 初始化不会调用此方法
         */
        console.log('生命周期: componentWillReceiveProps 组件准备接收新的属性之前调用');
    }
    shouldComponentUpdate() {
        /**
         * shouldComponentUpdate(nextProps, nextState)
         * return true 组件重新渲染
         * return false 组件不会重新渲染 (componentDidUpdate render componentDidUpdate 不会触发)(未来 false 也触发重新渲染)
         * 比较新旧属性返回状态,来决定组件是否更新
         * PureComponent 实现了浅比较(如果数据结构深,比较不起作用)
         */
        console.log('生命周期: shouldComponentUpdate 组件接收新的属性和状态, 组件渲染前调用');
        return true;
    }
    componentWillUpdate() {
        /**
         * componentWillUpdate
         * 当接收新属性和新状态时,会被立即触发
         * 该方法不会在初始化调用
         * 不能再这里调用 this.setState()
         * shouldComponentUpdate 返回 flase时, 此方法不会被调用
         */
        console.log('生命周期: componentWillUpdate 组件接收新的属性和状态, 组件准备渲染前调用');
    }
    componentDidUpdate() {
        /**
         * componentDidUpdate
         * 组件更新后立即调用
         * 初始化的时候不会调用该方法
         * shouldComponentUpdate 返回 false时 此方法不会被调用
         */
        console.log('生命周期: componentDidUpdate 组件接收新的属性和状态, 组件更新后立即调用');
    }
    componentWillUnmount() {
        /**
         * componentWillUnmount
         * 组件被卸载和销毁前立刻调用
         * 在这里处理清理工作
         * 例如解除定时器, 取消网络请求
         */
        console.log('生命周期: componentWillUnmount 组件卸载时调用');
    }
    handlerClick = () => {
        this.setState({
            name: this.state.name === 'DevTool console查看组件装载生命周期' ? 'DevTool console查看组件更新生命周期' : 'DevTool console查看组件装载生命周期',
        });
    }
    render() {
        const styles = {
            marginBottom: '10px',
        };
        const styles1 = {
            paddingTop: '20px',
            paddingLeft: '20px',
            paddingRight: '20px',
        };
        return (
            <div style={styles1}>
                <Spin spinning={this.state.loading}>
                    <Row style={styles}><Button type="primary" onClick={this.handlerClick}>触发更新</Button></Row>
                    <Row style={styles}>{this.state.name}</Row>
                    <Row style={styles}>
                        <Collapse accordion>
                            <Panel header="componentWillMount 组件装载前立即调用" key="1">
                                <pre>
                                    {
                                    `
componentWillMount() {
    /**
     * componentWillMount
     * 组件装载前调用
     * 在这里同步设置状态不会触发重新渲染
     */
    console.log('生命周期: componentWillMount 组件装载前立即调用');
}
                                    `
                                    }
                                </pre>
                            </Panel>
                            <Panel header="componentDidMount 组件装载后立即调用" key="2">
                                <pre>
                                    {
                                    `
componentDidMount() {
    /**
     * componentDidMount
     * 组件装载后调用
     * 在这里设置状态会触发重新渲染
     * (官网建议 这里适合从服务端获取数据)
     */
    console.log('生命周期: componentDidMount 组件装载后立即调用');
    setTimeout(() => {
        this.setState({
            loading: false,
        });
    }, 500);
}
                                    `
                                    }
                                </pre>
                            </Panel>
                            <Panel header="componentWillReceiveProps 组件准备接收新的属性之前调用" key="3">
                                <pre>
                                    {
                                    `
componentWillReceiveProps() {
    /**
     * componentWillReceiveProps(nextProps)
     * 已经装载的组件,接收新的属性前调用
     * !!即使属性没有变化,React可能也会调用该方法,父级组件可能会引起组件的渲染
     * 初始化不会调用此方法
     */
    console.log('生命周期: componentWillReceiveProps 组件准备接收新的属性之前调用');
}
                                    `
                                    }
                                </pre>
                            </Panel>
                            <Panel header="shouldComponentUpdate 件接收新的属性和状态, 组件渲染前调用" key="4">
                                <pre>
                                    {
                                    `
shouldComponentUpdate() {
    /**
     * shouldComponentUpdate(nextProps, nextState)
     * return true 组件重新渲染
     * return false 组件不会重新渲染 (componentDidUpdate render componentDidUpdate 不会触发)(未来 false 也触发重新渲染)
     * 比较新旧属性返回状态,来决定组件是否更新
     * PureComponent 实现了浅比较(如果数据结构深,比较不起作用)
     * 禁止在此方法调用 setState, 会造成循环调用,直至浏览器内存耗光,崩溃
     */
    console.log('生命周期: shouldComponentUpdate 组件接收新的属性和状态, 组件渲染前调用');
    return true;
}
                                    `
                                    }
                                </pre>
                            </Panel>
                            <Panel header="componentWillUpdate组件接收新的属性和状态, 组件准备渲染前调用" key="5">
                                <pre>
                                    {
                                    `
componentWillUpdate() {
    /**
     * componentWillUpdate
     * 当接收新属性和新状态时,会被立即触发
     * 该方法不会在初始化调用
     * 不能再这里调用 this.setState()
     * shouldComponentUpdate 返回 flase时, 此方法不会被调用
     * 禁止在此方法调用 setState, 会造成循环调用,直至浏览器内存耗光,崩溃
     */
    console.log('生命周期: componentWillUpdate 组件接收新的属性和状态, 组件准备渲染前调用');
}
                                    `
                                    }
                                </pre>
                            </Panel>
                            <Panel header="componentDidUpdate 组件接收新的属性和状态, 组件更新后立即调用" key="6">
                                <pre>
                                    {
                                    `
componentDidUpdate() {
    /**
     * componentDidUpdate
     * 组件更新后立即调用
     * 初始化的时候不会调用该方法
     * shouldComponentUpdate 返回 false时 此方法不会被调用
     */
    console.log('生命周期: componentDidUpdate 组件接收新的属性和状态, 组件更新后立即调用');
}
                                    `
                                    }
                                </pre>
                            </Panel>
                            <Panel header="componentWillUnmount 组件卸载时调用" key="7">
                                <pre>
                                    {
                                    `
componentWillUnmount() {
    /**
     * componentWillUnmount
     * 组件被卸载和销毁前立刻调用
     * 在这里处理清理工作
     * 例如解除定时器, 取消网络请求
     */
    console.log('生命周期: componentWillUnmount 组件卸载时调用');
}
                                    `
                                    }
                                </pre>
                            </Panel>
                        </Collapse>
                    </Row>
                </Spin>
                <Row><a href="https://zhuanlan.zhihu.com/purerender/20312691" target="_blank">React 源码剖析系列 － 生命周期的管理艺术</a></Row>
            </div>
        );
    }
}
