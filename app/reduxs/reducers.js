import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { todos } from '../containers/Redux/Todos/reducer';

export default combineReducers({
    todos,
    routing: routerReducer,
});
