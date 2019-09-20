import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PriveLayout = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated === 'true' ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {
                            from: props.location,
                        },
                    }}
                />
            )
        }
    />
);

const mapStateToProps = (state) => ({
    isAuthenticated: state.login.isAuthenticated,
});

PriveLayout.propTypes = {
    component: PropTypes.func,
    isAuthenticated: PropTypes.string,
    location: PropTypes.object,
};

export default connect(
    mapStateToProps,
    null,
)(PriveLayout);
