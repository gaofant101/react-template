import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Icon, Menu, Dropdown, Avatar } from 'antd';

import { requestLogOutUserAction } from 'containers/LoginPage/action';
import styles from './style.css';

const { Header } = Layout;

const { Item, Divider } = Menu;

class UserHeader extends Component {
    // constructor(props) {
    //     super(props);
    // }
    componentWillMount() {}
    componentWillReceiveProps(nextProps) {
        if (nextProps.isAuthed === 'refuse') {
            this.props.history.replace('/login');
        }
    }
    callback = () => {
        this.props.requestLogOutUser();
    };
    render() {
        const menu = (
            <Menu onClick={this.callback}>
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
        const { collapsed, toggle } = this.props;
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className={styles.trigger}
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={toggle}
                />
                <div className={styles.user}>
                    <Dropdown overlay={menu}>
                        <span className={styles.userinfo}>
                            <span className={styles.usersend}>你好, </span>
                            <Avatar
                                size="small"
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            />
                            <span className={styles.username}>管理员</span>
                        </span>
                    </Dropdown>
                </div>
            </Header>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthed: state.loggedUserReducer.isAuthed,
});

const mapDispatchToProps = (dispatch) => ({
    requestLogOutUser: () => {
        dispatch(requestLogOutUserAction());
    },
});

UserHeader.propTypes = {
    toggle: PropTypes.func,
    collapsed: PropTypes.bool,
    history: PropTypes.object,
    isAuthed: PropTypes.string,
    requestLogOutUser: PropTypes.func,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserHeader);
