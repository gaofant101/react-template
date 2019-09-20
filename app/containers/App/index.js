import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from '@layouts/Main';

import PriveLayout from '@layouts/PriveLayout';
import { privateRoutes, publicRoutes } from '@routers';

const App = () => (
    <React.Fragment>
        <CssBaseline />
        <Switch>
            {publicRoutes.map((route) => (
                <Route key={`public-route-${route.path}`} {...route} />
            ))}
            <Main>
                {privateRoutes.map((route) => (
                    <PriveLayout key={`private-route-${route.path}`} {...route} />
                ))}
            </Main>
        </Switch>
    </React.Fragment>
);

export default App;
