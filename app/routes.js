import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import { isOAuth } from 'utils/isOAuth';

import App from 'containers/App';

const errorLoading = (err) => {
    console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
    cb(null, componentModule.default);
};

// 验证登录
// const requireAuth = (nextState, replace) => {
//     if (!isOAuth.hasOAuth('token')) {
//         replace({ pathname: '/Login' });
//     }
// };

const routes = (
    <Route>
        {/* <Route path="/" component={App} onEnter={requireAuth}> */}
        <Route path="/" component={App}>
            <IndexRoute
              breadcrumbName="欢迎"
              breadcrumbItemName="你好管理员"
              getComponent={(nextState, cb) => {
                  import('containers/Welcome/HelloAdmin')
                      .then(loadModule(cb))
                      .catch(errorLoading);
              }}
            />
            {/* 欢迎 */}
            <Route path="Welcome">
                <Route path="HelloAdmin"
                  breadcrumbName="欢迎"
                  breadcrumbItemName="你好管理员"
                  getComponent={(nextState, cb) => {
                      import('containers/Welcome/HelloAdmin')
                          .then(loadModule(cb))
                          .catch(errorLoading);
                  }}
                />
            </Route>
            {/* 欢迎 END */}
        </Route>
    </Route>
);
export default routes;
