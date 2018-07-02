import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import styles from './style.css';
import { menu } from './menu';

const { Sider } = Layout;
const { Item, SubMenu } = Menu;

export default class SiderColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: null,
            openKeys: ['/'],
        };
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
        const latestOpenKey = openKeys.find(
            (key) => this.state.openKeys.indexOf(key) === -1,
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    setMenuOpen = (path, collapsed) => {
        const openKey = [`/${path.split('/')[1]}`];
        const arr = path.split('/');
        arr.shift();
        const current = arr.reduce((key1, key2) => `${key1}/${key2}`);
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
    };
    rootSubmenuKeys = [
        '/',
        '/LifeCycle',
        '/setState',
        '/TopLevelApi',
        '/Redux',
    ];
    handleClick = (e) => {
        this.setState({ current: e.key });
    };
    renderMenu = (data) =>
        data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.renderMenuItem(item.children)}
                    </SubMenu>
                );
            }
            return (
                <SubMenu
                    key={item.key}
                    title={
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </span>
                    }
                />
            );
        });
    renderMenuItem = (data) =>
        data.map((item) => (
            <Item key={item.key}>
                <Link to={item.key}><Icon type={item.icon} />{item.title}</Link> {/* eslint-disable-line */}
            </Item>
        ));
    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className={styles.logo} />
                <Menu
                    theme="dark"
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    selectedKeys={[this.state.current]}
                >
                    {this.renderMenu(menu)}
                </Menu>
            </Sider>
        );
    }
}

SiderColumn.propTypes = {
    collapsed: PropTypes.bool,
};
