import React, { PureComponent } from 'react';

export default class LifeCycle extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            flag: 'false',
        };
    }
    componentWillMount() {
        /**
         * componentWillMount
         * 组件装载前调用
         * 在这里同步设置状态不会触发重新渲染
         */
    }
    componentDidMount() {
        /**
         * componentDidMount
         * 组件装载后调用
         * 在这里设置状态会触发重新渲染
         * (官网建议 这里适合从服务端获取数据)
         */
    }
    componentWillReceiveProps() {
        /**
         * componentWillReceiveProps
         * 已经装载的组件,接收新的属性前调用
         * !!即使属性没有变化,React可能也会调用该方法,父级组件可能会引起组件的渲染
         * 初始化不会调用此方法
         */
    }
    shouldComponentUpdate() {
        /**
         * shouldComponentUpdate(nextProps, nextState)
         * return true 组件重新渲染
         * return false 组件不会重新渲染 (componentDidUpdate render componentDidUpdate 不会触发)(未来 false 也触发重新渲染)
         * 比较新旧属性返回状态,来决定组件是否更新
         * PureComponent 实现了浅比较(如果数据)
         */
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
    }
    componentDidUpdate() {
        /**
         * componentDidUpdate
         * 组件更新后立即调用
         * 初始化的时候不会调用该方法
         * shouldComponentUpdate 返回 false时 此方法不会被调用
         */
    }
    componentWillUnmount() {
        /**
         * componentWillUnmount
         * 组件被卸载和销毁前立刻调用
         * 在这里处理清理工作
         * 例如解除定时器, 取消网络请求
         */
    }
    render() {
        return (
            <div>
                生命周期图
            </div>
        );
    }
}
