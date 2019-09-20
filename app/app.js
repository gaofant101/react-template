/**
 * app.js
 *
 */

import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import configureStore from '@reduxs/configureStore';
import history from '@utils/history';
import App from 'containers/App';
import '!file-loader?name=[name].[ext]!assets/images/favicon.ico';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById('app');
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <MuiThemeProvider theme={theme}>
                    <App />
                </MuiThemeProvider>
            </ConnectedRouter>
        </Provider>,
        MOUNT_NODE,
    );
};
render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
    require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
