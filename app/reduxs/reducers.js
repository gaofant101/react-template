import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import { todos } from '../containers/Redux/Todos/reducer';
import { loadGit } from '../containers/Redux/LoadGithub/reducer';

export default combineReducers({
    todos,
    loadGit,
    // routing: routerReducer,
});
