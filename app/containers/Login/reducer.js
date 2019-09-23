import { getAuthenticated, setAuthenticated } from 'utils/authority';
import { SET_LOGIN_STATUS, SET_LOGOUT_STATUS } from './action';

const Authority = getAuthenticated();
const initialState = {
    pending: true,
    isAuthenticated: Authority,
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_STATUS:
            setAuthenticated('true');
            return { ...state, pending: true, isAuthenticated: 'true' };
        case SET_LOGOUT_STATUS:
            setAuthenticated('false');
            return { ...state, pending: true, isAuthenticated: 'false' };
        default:
            return state;
    }
};
