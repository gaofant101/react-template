import React, { Component } from 'react';
import { Row, Col, Card, Collapse, Spin } from 'antd';
import styles from './style1.css';

// import img001 from './lifeCycle-001.jpg';
import img002 from './lifeCycle-002.jpg';
import img003 from './lifeCycle-003.jpg';
import img004 from './lifeCycle-004.jpg';
import img005 from './lifeCycle-005.jpg';
import img006 from './lifeCycle-006.jpg';
import img007 from './lifeCycle-007.jpg';

const Panel = Collapse.Panel;

export default class LifeCycleStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            num: 0,
        };
    }
    componentWillMount() {
        // 1
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 100);
    }
    render() {
        return (
            <div className={styles.box}>
                <Row className={styles.marginBtm20}>
                    <a href="https://zhuanlan.zhihu.com/purerender/20312691" target="_blank">[ 原文 ] React 源码剖析系列 － 生命周期的管理艺术</a>
                </Row>
                <Spin spinning={this.state.loading}>
                    <Row className={styles.marginBtm20}>
                        <Collapse defaultActiveKey={['1']} accordion>
                            <Panel header="React 生命周期" key="1">
                                <Col span={6}>
                                    <Card title="当首次装载组件时">
                                        <pre><em>getDefaultProps</em></pre>
                                        <pre><em>getInitialState</em></pre>
                                        <pre><em>componentWillMount</em></pre>
                                        <pre><em>render </em></pre>
                                        <pre><em>componentDidMount </em></pre>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card title="当卸载组件时">
                                        <pre><em>componentWillUnmount</em></pre>
                                    </Card>
                                    <Card title="当重新装载组件时">
                                        <pre><em>getInitialState</em></pre>
                                        <pre><em>componentWillMount</em></pre>
                                        <pre><em>render </em></pre>
                                        <pre><em>componentDidMount</em></pre>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card title="当再次渲染组件时,组件接受到更新状态(props)">
                                        <pre><em>componentWillReceiveProps</em></pre>
                                        <pre><em>shouldComponentUpdate</em></pre>
                                        <pre><em>componentWillUpdate </em></pre>
                                        <pre><em>render </em></pre>
                                        <pre><em>componentDidUpdate</em></pre>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card title="当再次渲染组件时,组件接受到更新状态(state)">
                                        <pre><em>shouldComponentUpdate</em></pre>
                                        <pre><em>componentWillUpdate </em></pre>
                                        <pre><em>render </em></pre>
                                        <pre><em>componentDidUpdate</em></pre>
                                    </Card>
                                </Col>
                                <img src={img002} alt="" className={styles.img001} />
                            </Panel>
                            <Panel header="自定义组件(ReactCompositeComponent)的生命周期通过三种状态进行管理" key="2">
                                <pre><em>mountComponent -&gt; MOUNTING</em></pre>
                                <pre><em>updateComponent -&gt; RECEIVE_PROPS </em></pre>
                                <pre><em>unmountComponent -&gt; UNMOUNTING </em></pre>
                                <img src={img003} alt="" className={styles.img001} />
                            </Panel>
                            <Panel header="MOUNTING" key="3">
                                <ul className={styles.list}>
                                    <li>
                                        首先通过 mountComponent 装载组件,此时,将状态设置为 MOUNTING,利用 getInitialState 获取初始化 state,初始化更新队列
                                    </li>
                                    <li>
                                        若存在 componentWillMount,则执行;如果此时在 componentWillMount 中调用 setState,是不会触发 reRender,而是进行 state 合并
                                    </li>
                                    <li>
                                        到此时,已经完成 MOUNTING 的工作,更新状态为 NULL,同时 state 也将执行更新操作,此刻在 render 中可以获取更新后的 this.state 数据
                                    </li>
                                    <li>
                                        当渲染完成之后,若存在 componentDidMount 则触发.这就解释了 componentWillMount - render - componentDidMount 三者之间的执行顺序
                                    </li>
                                </ul>
                                <img src={img004} alt="" />
                            </Panel>
                            <Panel header="RECEIVE_PROPS" key="4">
                                <h3 className={styles.marginBtm20}>
                                    updateComponent 负责管理生命周期中的 componentWillReceiveProps、shouldComponentUpdate、componentWillUpdate、render 和 componentDidUpdate
                                </h3>
                                <ul className={styles.list}>
                                    <li>
                                        首先通过 updateComponent 更新组件,如果前后元素不一致说明需要进行组件更新,此时将状态设置为RECEIVING_PROPS
                                    </li>
                                    <li>
                                        若存在 componentWillReceiveProps,则执行;如果此时在 componentWillReceiveProps 中调用 setState,是不会触发 reRender,而是进行 state 合并
                                    </li>
                                    <li>
                                        到此时,已经完成 RECEIVING_PROPS 工作,更新状态为 NULL,同时 state 也将执行更新操作,此刻 this.state 可以获取到更新后的数据
                                        <p>
                                            注意: 此时 this.state 虽然获取到更新数据,但只能在内部源码中使用,我们在开发时,若在 componentWillReceiveProps 中调用 setState,那么在 componentWillReceiveProps、shouldComponentUpdate 和 componentWillUpdate 中还是无法获取到更新后的 this.state,即此时访问的this.state 仍然是未更新的数据,只有在 render 和 componentDidUpdate 中才能获取到更新后的this.state
                                        </p>
                                    </li>
                                    <li>
                                        调用 shouldComponentUpdate 判断是否需要进行组件更新,如果存在 componentWillUpdate,则执行
                                    </li>
                                    <li>
                                        updateComponent 本质上也是通过 递归渲染 内容的,由于递归的特性,父组件的 componentWillUpdate 一定在其子组件的 componentWillUpdate 之前调用,而父组件的 componentDidUpdate 肯定在其子组件 componentDidUpdate 之后调用
                                    </li>
                                    <li>
                                        当渲染完成之后,若存在 componentDidUpdate,则触发,这就解释了 componentWillReceiveProps - componentWillUpdate - render - componentDidUpdate 它们之间的执行顺序
                                    </li>
                                </ul>
                                <h3>
                                    注意: 禁止在 shouldComponentUpdate 和 componentWillUpdate 中调用 setState,会造成循环调用,直至耗光浏览器内存后崩溃
                                </h3>
                                <img src={img005} alt="" className={styles.img001} />
                            </Panel>
                            <Panel header="UNMOUNTING" key="5">
                                <h3 className={styles.marginBtm20}>unmountComponent 负责管理生命周期中的 componentWillUnmount</h3>
                                <h3>首先将状态设置为 UNMOUNTING,若存在 componentWillUnmount,则执行；如果此时在 componentWillUnmount 中调用 setState,是不会触发 reRender.更新状态为 NULL,完成组件卸载操作</h3>
                            </Panel>
                            <Panel header="setState 更新机制" key="6">
                                <h3 className={styles.marginBtm20}>
                                    当调用 setState 时,会对 state 以及 _pendingState 更新队列进行合并操作,但其实真正更新 state 的幕后黑手是replaceState
                                </h3>
                                <h3 className={styles.marginBtm20}>
                                    replaceState 会先判断当前状态是否为 MOUNTING,如果不是即会调用 ReactUpdates.enqueueUpdate 执行更新
                                </h3>
                                <h3 className={styles.marginBtm20}>
                                    如果在 shouldComponentUpdate 或 componentWillUpdate 中调用 setState,此时的状态已经从 RECEIVING_PROPS -&gt; NULL,则 performUpdateIfNecessary 就会调用 updateComponent 进行组件更新,但 updateComponent 又会调用 shouldComponentUpdate 和 componentWillUpdate,因此造成循环调用,使得浏览器内存占满后崩溃
                                </h3>
                                <img src={img006} alt="" className={styles.img001} />
                            </Panel>
                            <Panel header="总结" key="7">
                                <h3 className={styles.marginBtm20}>
                                    React 通过三种状态: MOUNTING、RECEIVE_PROPS、UNMOUNTING,管理整个生命周期的执行顺序
                                </h3>
                                <h3 className={styles.marginBtm20}>
                                    setState 会先进行 _pendingState 更新队列的合并操作,不会立刻 reRender,因此是异步操作,且通过判断状态（MOUNTING、RECEIVE_PROPS）来控制 reRender 的时机
                                </h3>
                                <h3 className={styles.marginBtm20}>
                                    不建议在 getDefaultProps、getInitialState、shouldComponentUpdate、componentWillUpdate、render 和 componentWillUnmount 中调用 setState,特别注意: 不能在 shouldComponentUpdate 和 componentWillUpdate中调用 setState,会导致循环调用
                                </h3>
                                <img src={img007} alt="" className={styles.img001} />
                            </Panel>
                        </Collapse>
                    </Row>
                </Spin>
            </div>
        );
    }
}
