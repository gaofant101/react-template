/* eslint no-console:0 */
import React from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class LeftSider extends React.Component {
    static propTypes = {
        mode: React.PropTypes.string,
        path: React.PropTypes.string,
    }
    state = {
        current: null,
        openKeys: [],
    }
    componentWillMount() {
        this.setMenuOpen(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.setMenuOpen(nextProps);
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
    setMenuOpen = (props) => {
        const { path } = props;
        const openKey = [`/${path.split('/')[1]}`];
        this.setState({
            openKeys: openKey,
            current: path,
        });
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
                <SubMenu key="/Welcome" title={<span><Icon type="hdd" /><span>Option 1</span></span>}>
                    <Menu.Item key="1"><Link to="/Welcome/HelloAdmin">Option 1-1</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="/Hello" title={<span><Icon type="hdd" /><span>Option 1</span></span>}>
                    <Menu.Item key="2"><Link to="/Hello/HelloWorld">Option 1-2</Link></Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}
