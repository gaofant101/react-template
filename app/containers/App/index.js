import React from 'react';
import {
  Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import AuthorizedRoute from 'components/AuthorizedRoute';
import PrimaryLayout from 'layouts/PrimaryLayout';
import UnauthorizedLayout from 'layouts/UnauthorizedLayout';

import finalCreateStore from 'reduxs';
import reducers from 'reduxs/reducers';

/**
 * inject store
 */
const store = finalCreateStore(reducers);
const customHistory = createBrowserHistory();

const App = () => (
    <Provider store={store}>
        <Router history={customHistory}>
            <Switch>
                <Route path="/login" exact component={UnauthorizedLayout} />
                <AuthorizedRoute path="/" component={PrimaryLayout} />
                <Redirect to="/login" />
            </Switch>
        </Router>
    </Provider>
);

export default App;
