import { getAuthority, setAuthority } from 'utils/authority';

const Authority = getAuthority();
const initialState = {
    pending: true,
    isAuthed: Authority,
};

export const loggedUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LOGGED_USER':
            return Object.assign({}, state, {
                pending: false,
            });
        case 'SET_LOGGED_USER':
            setAuthority('admin');
            return Object.assign({}, state, {
                pending: true,
                isAuthed: 'admin',
            });
        case 'LOGOUT_LOGGED_USER':
            setAuthority('refuse');
            return Object.assign({}, state, {
                pending: true,
                isAuthed: '',
            });
        default:
            return state;
    }
};
