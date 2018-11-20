import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from 'containers/LoginPage';

const UnauthorizedLayout = () => (
    // <div className={styles.login}>
    <div>
        <Switch>
            <Route path="/login" component={LoginPage} />
            <Redirect to="/login" />
        </Switch>
    </div>
);

export default UnauthorizedLayout;
