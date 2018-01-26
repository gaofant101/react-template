import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import DevTools from 'components/DevTools';

const middleware = [thunk];
const finalCreateStore = compose(
    applyMiddleware(...middleware),
    DevTools.instrument(),
)(createStore);

export default finalCreateStore;
