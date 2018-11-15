import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Icon } from 'antd';
import Wrapper from './Wrapper';
import Content from './Content';
import GlobalFooter from './GlobalFooter';

import { requestLoggedUserAction } from './action';
import { Logo } from './logo';
// import styles from './style.less';

import WrappedNormalLoginForm from './form';

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
                    {/* <div className={styles.top}> */}
                    <div>
                        {/* <div className={styles.head}> */}
                        <div>
                            <Logo />
                        </div>
                        {/* <div className={styles.desc}> */}
                        <div>
                            Quick setup for new performance orientated, offline–first React.js
                            applications
                        </div>
                    </div>
                    {/* <div className={styles.main}> */}
                    <div>
                        <WrappedNormalLoginForm requestLoggedUser={requestLoggedUser} />
                    </div>
                </Content>
                <GlobalFooter>
                    {/* <div className={styles.link}> */}
                    <div>
                        <span>帮助</span>
                        <span>隐私</span>
                        <span>条款</span>
                    </div>
                    {/* <div className={styles.copyright}> */}
                    <div>
                        Copyright
                        <Icon type="copyright" />
                        2018 react-template
                    </div>
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
