import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Layout,
  Menu,
  Icon,
} from 'antd';
import styles from './style.css';

const { Sider } = Layout;
const { Item } = Menu;
const SubMenu = Menu.SubMenu;

// const SubMenu = Menu.SubMenu;

export default class SiderColumn extends Component {
    state = {
        current: null,
        openKeys: ['/'],
    }
    componentDidMount() {
        const path = window.location.pathname;
        this.setMenuOpen(path);
    }
    componentWillReceiveProps(nextProps) {
        const path = window.location.pathname;
        this.setMenuOpen(path, nextProps.collapsed);
    }
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find((key) => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    setMenuOpen = (path, collapsed) => {
        const openKey = [`/${path.split('/')[1]}`];
        const arr = path.split('/');
        arr.shift();
        const current = arr.reduce((key1, key2) =>
            `${key1}/${key2}`
        );
        if (!collapsed) {
            this.setState(() => ({
                openKeys: openKey,
            }));
        } else {
            this.setState(() => ({
                openKeys: [],
            }));
        }
        this.setState(() => ({
            current: `/${current}`,
        }));
    }
    rootSubmenuKeys = ['/', '/LifeCycle', '/setState', '/TopLevelApi', '/Redux'];
    handleClick = (e) => {
        this.setState({ current: e.key });
    }
    render() {
        return (
            <Sider
              trigger={null}
              collapsible
              collapsed={this.props.collapsed}
            >
                <div className={styles.logo} />
                <Menu
                  theme="dark"
                  mode="inline"
                  openKeys={this.state.openKeys}
                  onOpenChange={this.onOpenChange}
                  selectedKeys={[this.state.current]}
                >
                    <SubMenu key="/" title={<span><Icon type="smile" /><span>首页</span></span>}>
                        <Item key="/">
                            <Link to="/"><Icon type="bars" />Welcome</Link>
                        </Item>
                    </SubMenu>
                    <SubMenu key="/LifeCycle" title={<span><Icon type="loading" /><span>生命周期</span></span>}>
                        <Item key="/LifeCycle/Function">
                            <Link to="/LifeCycle/Function"><Icon type="bars" />LifeCycle</Link>
                        </Item>
                        <Item key="/LifeCycle/Step">
                            <Link to="/LifeCycle/Step"><Icon type="bars" />Step</Link>
                        </Item>
                    </SubMenu>
                    <SubMenu key="/setState" title={<span><Icon type="frown-o" /><span>React.setState</span></span>}>
                        <Item key="/setState">
                            <Link to="/setState"><Icon type="bars" />setState</Link>
                        </Item>
                    </SubMenu>
                    <SubMenu key="/TopLevelApi" title={<span><Icon type="setting" /><span>TopLevelApi</span></span>}>
                        <Item key="/TopLevelApi">
                            <Link to="/TopLevelApi"><Icon type="bars" />TopLevelApi</Link>
                        </Item>
                    </SubMenu>
                    <SubMenu key="/Redux" title={<span><Icon type="setting" /><span>Redux</span></span>}>
                        <Item key="/Redux">
                            <Link to="/Redux"><Icon type="bars" />Redux</Link>
                        </Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

SiderColumn.propTypes = {
    // path: PropTypes.string,
    collapsed: PropTypes.bool,
    // location: PropTypes.string,
};
