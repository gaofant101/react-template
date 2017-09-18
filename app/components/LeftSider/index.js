import React from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';
import { isOAuth } from '../../utils/isOAuth';
const SubMenu = Menu.SubMenu;

export default class LeftSider extends React.PureComponent {
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
        const currentPath = `/${path.split('/')[1]}/${path.split('/')[2]}`;
        this.setState({
            openKeys: openKey,
            current: currentPath,
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
            >
                <SubMenu key="/Welcome" title={<span><Icon type="smile" /><span>首页</span></span>}>
                    <Menu.Item key="/Welcome/HelloAdmin">
                        <Link to="/Welcome/HelloAdmin">您好,{isOAuth.getOAuth('username')}</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}
