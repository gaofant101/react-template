import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import Loading from '../../components/Loading';

const LoadablePrimaryLayout = Loadable({
    loader: () => import('../../layouts/PrimaryLayout'),
    loading: Loading,
});
const LoadableTopLevelApi = Loadable({
    loader: () => import('../TopLevelApi'),
    loading: Loading,
});

const App = () => (
    <Router>
        <div>
            <Link to="/">首页</Link>
            <Link to="/toplevelapi">toplevelapi</Link>
            <Switch>
                <Route path="/" exact component={LoadablePrimaryLayout} />
                <Route path="/toplevelapi" component={LoadableTopLevelApi} />
                <Redirect to="/app" />
            </Switch>
        </div>
    </Router>
);

export default App;
