import { DRAWER_OPEN, DRAWER_CLOSE } from './action';

const initialState = {
    open: false,
};

export const drawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case DRAWER_OPEN:
            return Object.assign({}, state, {
                open: true,
            });
        case DRAWER_CLOSE:
            return Object.assign({}, state, {
                open: false,
            });
        default:
            return state;
    }
};
