import { combineReducers } from 'redux';

import { todos } from '../containers/Redux/Todos/reducer';
import { loadGit } from '../containers/Redux/LoadGithub/reducer';
import { loggedUserReducer } from '../containers/LoginPage/reducer';

export default combineReducers({
    todos,
    loadGit,
    loggedUserReducer,
});
