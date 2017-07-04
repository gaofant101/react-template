/* eslint no-console:0 */
import React from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class LeftSider extends React.Component {
    static propTypes = {
        mode: React.PropTypes.string,
    }
    state = {
        current: '1',
        openKeys: ['sub1'],
    }
    componentWillMount() {
        // console.log(this.props);
    }
    onOpenChange = (openKeys) => {
        const state = this.state;
        const latestOpenKey = openKeys.find((key) => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find((key) => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
    }
    getAncestorKeys = (key) => {
        // 二级导航设置
        const map = {};
        return map[key] || [];
    }
    handleClick = (e) => {
        this.setState({ current: e.key });
    }
    render() {
        return (
            <Menu
              theme="dark"
              mode={this.props.mode}
              openKeys={this.state.openKeys}
              selectedKeys={[this.state.current]}
              onOpenChange={this.onOpenChange}
              onClick={this.handleClick}
              defaultSelectedKeys={['1']}
            >
                <SubMenu key="sub1" title={<span><Icon type="hdd" /><span>Option 1</span></span>}>
                    <Menu.Item key="1"><Link to="/HelloAdmin">Option 1-1</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/HelloWorld">Option 1-2</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="database" /><span>Option 2</span></span>}>
                    <Menu.Item key="7">Option 2-1</Menu.Item>
                    <Menu.Item key="8">Option 2-2</Menu.Item>
                    <Menu.Item key="9">Option 2-3</Menu.Item>
                    <Menu.Item key="10">Option 2-4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="safety" /><span>Option 3</span></span>}>
                    <Menu.Item key="11">Option 3-1</Menu.Item>
                    <Menu.Item key="12">Option 3-2</Menu.Item>
                    <Menu.Item key="13">Option 3-3</Menu.Item>
                    <Menu.Item key="14">Option 3-4</Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}
