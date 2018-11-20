/**
 * app.js
 *
 */

import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';

import App from 'containers/App';

import '!file-loader?name=[name].[ext]!assets/images/favicon.ico';
import 'file-loader?name=[name].[ext]!./.htaccess'; // eslint-disable-line import/extensions

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});
openSansObserver.load().then(() => {
    document.body.classList.add('fontLoaded');
});

const MOUNT_NODE = document.getElementById('app');
const render = () => {
    ReactDOM.render(<App />, MOUNT_NODE);
};
render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
    require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
