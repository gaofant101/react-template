import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '@utils/history';
import { loginReducer } from '@containers/Login/reducer';
import { drawerReducer } from '@layouts/Menu/reducer';

const createRootReducer = (injectedReducers = {}) => {
    const rootReducer = combineReducers({
        router: connectRouter(history),
        login: loginReducer,
        drawer: drawerReducer,
        ...injectedReducers,
    });
    return rootReducer;
};

export default createRootReducer;
