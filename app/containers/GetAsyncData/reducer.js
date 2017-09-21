import { GETASYNCDATA, CLEARASYNCDATA } from '../../reduxs/actionTypes';
import { initialState } from '../../reduxs/store';

export default function getAsyncData(state = initialState, action) {
    switch (action.type) {
        case GETASYNCDATA:
            return Object.assign({}, state, { asyncdata: action.data });
        case CLEARASYNCDATA:
            return Object.assign({}, state, { asyncdata: action.data });
        default:
            return state;
    }
}
