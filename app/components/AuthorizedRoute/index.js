import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const AuthorizedRoute = ({ component: Component, isAuthed, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthed === 'admin' ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

const mapStateToProps = (state) => ({
    isAuthed: state.loggedUserReducer.isAuthed,
});

AuthorizedRoute.propTypes = {
    component: PropTypes.func,
    isAuthed: PropTypes.string,
};

export default connect(
    mapStateToProps,
    null,
)(AuthorizedRoute);
