import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
// import createHistory from 'history/createBrowserHistory';

import routes from 'routers';
import RouteWithSubRoutes from 'components/RouteWithSubRoutes';
import PrimaryLayout from 'layouts/PrimaryLayout';

import finalCreateStore from 'reduxs';
import reducers from 'reduxs/reducers';

/**
 * inject store
 */
const store = finalCreateStore(reducers);
// const history = createHistory();

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <PrimaryLayout>
                {
                    routes.map((route, index) => (
                        <RouteWithSubRoutes key={index.toString()} {...route} />
                    ))
                }
            </PrimaryLayout>
        </BrowserRouter>
    </Provider>
);

export default App;
