import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Icon, Menu, Dropdown, Avatar } from 'antd';
import { requestLogOutUserAction } from 'containers/LoginPage/action';
import Trigger from './Trigger';
import Users from './Users';
import UserInfo from './UserInfo';

const { Header } = Layout;

const { Item, Divider } = Menu;

class UserHeader extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    componentWillReceiveProps(nextProps) {
        const { history } = this.props;
        if (nextProps.isAuthed === 'refuse') {
            history.replace('/login');
        }
    }

    callback = () => {
        const { requestLogOutUser } = this.props;
        requestLogOutUser();
    };

    render() {
        const menu = (
            <Menu onClick={this.callback}>
                <Item key="0" disabled>
                    <Icon type="user" />
                    用户中心
                </Item>
                <Item key="1" disabled>
                    <Icon type="setting" />
                    设置
                </Item>
                <Divider />
                <Item key="3">
                    <Icon type="logout" />
                    登出
                </Item>
            </Menu>
        );
        const { collapsed, toggle } = this.props;
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Trigger>
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggle} />
                </Trigger>
                <Users>
                    <Dropdown overlay={menu}>
                        <UserInfo>
                            <span>你好, </span>
                            <Avatar
                                size="small"
                                src="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            />
                            <span>管理员</span>
                        </UserInfo>
                    </Dropdown>
                </Users>
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
