import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';

const errorLoading = (err) => {
    console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
    cb(null, componentModule.default);
};

const routes = (
    <Route>
        <Route path="/" component={App}>
            <IndexRoute
              breadcrumbName="欢迎"
              breadcrumbItemName="你好管理员"
              getComponent={(nextState, cb) => {
                  import('containers/Welcome')
                      .then(loadModule(cb))
                      .catch(errorLoading);
              }}
            />
            {/* 欢迎 */}
            <Route
              path="Welcome"
              breadcrumbName="欢迎"
              breadcrumbItemName="你好管理员"
              getComponent={(nextState, cb) => {
                  import('containers/Welcome')
                      .then(loadModule(cb))
                      .catch(errorLoading);
              }}
            />
            {/* 欢迎 END */}
        </Route>
    </Route>
);
export default routes;
