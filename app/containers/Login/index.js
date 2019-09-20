import { connect } from 'react-redux';
import LoginPage from './component';
import { loginAction } from './action';

const mapStateToProps = (state) => ({
    isAuthenticated: state.login.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
    requestLogin: () => {
        dispatch(loginAction());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginPage);
