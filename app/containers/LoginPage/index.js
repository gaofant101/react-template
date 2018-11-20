import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Icon } from 'antd';
import Wrapper from './Wrapper';
import Content from './Content';
import LoginHead from './LoginHead';
import LoginDesc from './LoginDesc';
import LoginMain from './LoginMain';
import LoginLink from './LoginLink';
import LoginCopyright from './LoginCopyright';
import GlobalFooter from './GlobalFooter';

import { requestLoggedUserAction } from './action';
import { Logo } from './logo';
// import styles from './style.less';

import WrappedNormalLoginForm from './WrappedNormalLoginForm';

class LoginPage extends Component {
    componentWillReceiveProps(nextProps) {
        const { history } = this.props;
        if (nextProps.isAuthed === 'admin') {
            history.replace('/');
        }
    }

    render() {
        const { requestLoggedUser } = this.props;
        return (
            <Wrapper>
                <Content>
                    <LoginHead>
                        <Logo />
                    </LoginHead>
                    <LoginDesc>
                        Quick setup for new performance orientated, offline–first React.js
                        applications
                    </LoginDesc>
                    <LoginMain>
                        <WrappedNormalLoginForm requestLoggedUser={requestLoggedUser} />
                    </LoginMain>
                </Content>
                <GlobalFooter>
                    <LoginLink>
                        <span>帮助</span>
                        <span>隐私</span>
                        <span>条款</span>
                    </LoginLink>
                    <LoginCopyright>
                        Copyright
                        <Icon type="copyright" />
                        2018 react-template
                    </LoginCopyright>
                </GlobalFooter>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthed: state.loggedUserReducer.isAuthed,
});

const mapDispatchToProps = (dispatch) => ({
    requestLoggedUser: () => {
        dispatch(requestLoggedUserAction());
    },
});

LoginPage.propTypes = {
    requestLoggedUser: PropTypes.func,
    history: PropTypes.object,
    isAuthed: PropTypes.string,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginPage);
