import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Icon,
  Menu,
  Dropdown,
  Avatar,
} from 'antd';

import styles from './style.css';

const {
  Header,
} = Layout;

const { Item, Divider } = Menu;

const menu = (
    <Menu>
        <Item key="0" disabled>
            <Icon type="user" className={styles.dropdowniconset} />
            用户中心
        </Item>
        <Item key="1" disabled>
            <Icon type="setting" className={styles.dropdowniconset} />
            设置
        </Item>
        <Divider />
        <Item key="3">
            <Icon type="logout" className={styles.dropdowniconset} />
            登出
        </Item>
    </Menu>
);

const UserHeader = (props) => (
    <Header style={{ background: '#fff', padding: 0 }}>
        <Icon className={styles.trigger} type={props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={props.toggle} />
        <div className={styles.user}>
            <Dropdown overlay={menu}>
                <span className={styles.userinfo}>
                    <span className={styles.usersend}>你好, </span>
                    <Avatar size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <span className={styles.username}>管理员</span>
                </span>
            </Dropdown>
        </div>
    </Header>
);

UserHeader.propTypes = {
    toggle: PropTypes.func,
    collapsed: PropTypes.bool,
};

export default UserHeader;
