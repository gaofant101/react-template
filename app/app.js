/**
 * This is the entry file for the application, only setup and boilerplate code.
 */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';

import App from './containers/App';

/* eslint-disable */
import '!file-loader?name=[name].[ext]!./assets/images/favicon.ico';
/* eslint-enable */

/**
 * Observe loading of Open Sans (to remove open sans, remove the <link> tag in
 * the index.html file and this observer)
 * When Open Sans is loaded, add a font-family using Open Sans to the body
 */
const openSansObserver = new FontFaceObserver('Open Sans', {});
openSansObserver.load().then(() => {
    document.body.classList.add('fontLoaded');
}, () => {
    document.body.classList.remove('fontLoaded');
});

const render = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
};
render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
    require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
