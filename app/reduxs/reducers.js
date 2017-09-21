import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from '../containers/Counter/reducer';
import getDataList from '../containers/DataList/reducer';
import getAsyncData from '../containers/GetAsyncData/reducer';

export default combineReducers({
    counter,
    getDataList,
    getAsyncData,
    routing: routerReducer,
});
