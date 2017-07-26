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
            {/* 中心体 */}
            <Route path="Welcome">
                <Route path="HelloAdmin"
                  breadcrumbName="欢迎"
                  breadcrumbItemName="你好管理员"
                  getComponent={(nextState, cb) => {
                      import('containers/Welcome')
                          .then(loadModule(cb))
                          .catch(errorLoading);
                  }}
                />
            </Route>
            <Route path="Hello">
                <Route path="HelloWorld"
                  breadcrumbName="欢迎"
                  breadcrumbItemName="HelloWorld"
                  getComponent={(nextState, cb) => {
                      import('containers/HelloWorld')
                          .then(loadModule(cb))
                          .catch(errorLoading);
                  }}
                />
            </Route>
            {/* 中心体 END */}
            <IndexRoute
              breadcrumbName="欢迎"
              breadcrumbItemName="你好管理员"
              getComponent={(nextState, cb) => {
                  import('containers/Welcome')
                      .then(loadModule(cb))
                      .catch(errorLoading);
              }}
            />
            {/* 系统管理 END */}
        </Route>
    </Route>
);
export default routes;
