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
              getComponent={(nextState, cb) => {
                  import('containers/DataCenter/QueryAnalysis')
                      .then(loadModule(cb))
                      .catch(errorLoading);
              }}
            />
            <Route path="queryAnalysis"
              getComponent={(nextState, cb) => {
                  import('containers/DataCenter/QueryAnalysis')
                      .then(loadModule(cb))
                      .catch(errorLoading);
              }}
            />
            <Route path="policyCustomization"
              getComponent={(nextState, cb) => {
                  import('containers/DataCenter/PolicyCustomization')
                      .then(loadModule(cb))
                      .catch(errorLoading);
              }}
            />
            <Route path="organization"
              getComponent={(nextState, cb) => {
                  import('containers/SystemManagement/Organization')
                      .then(loadModule(cb))
                      .catch(errorLoading);
              }}
            />
            <Route path="assets"
              getComponent={(nextState, cb) => {
                  import('containers/SystemManagement/Assets')
                      .then(loadModule(cb))
                      .catch(errorLoading);
              }}
            />
            <Route path="personnel"
              getComponent={(nextState, cb) => {
                  import('containers/SystemManagement/Personnel')
                      .then(loadModule(cb))
                      .catch(errorLoading);
              }}
            />
            <Route path="*"
              getComponent={(nextState, cb) => {
                  import('containers/DataCenter/QueryAnalysis')
                      .then(loadModule(cb))
                      .catch(errorLoading);
              }}
            />
        </Route>
    </Route>
);
export default routes;
