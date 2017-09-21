import { INCREASE, DECREASE } from '../../reduxs/actionTypes';
import { initialState } from '../../reduxs/store';

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return Object.assign({}, state, { number: state.number + action.amount });
        case DECREASE:
            return Object.assign({}, state, { number: state.number - action.amount });
        default:
            return state;
    }
}
