import React from 'react';
import {
  BrowserRouter,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from 'routers';
import RouteWithSubRoutes from 'components/RouteWithSubRoutes';

import finalCreateStore from 'reduxs';
import reducers from 'reduxs/reducers';

import styles from './style.css';

/**
 * inject store
 */
const store = finalCreateStore(reducers);

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div className={styles.box}>
                <Link to="/">Welcome</Link>
                <Link to="/LifeCycle">LifeCycle</Link>
                <Link to="/Step">Step</Link>
                <Link to="/setState">setState</Link>
                <Link to="/TopLevelApi">TopLevelApi111</Link>
                <Link to="/Redux">Redux</Link>
                {
                    routes.map((route, index) => (
                        <RouteWithSubRoutes key={index.toString()} {...route} />
                    ))
                }
            </div>
        </BrowserRouter>
    </Provider>
);

export default App;
