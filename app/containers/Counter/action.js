import { INCREASE, DECREASE } from '../../reduxs/actionTypes';

export const increase = (n) => ({
    type: INCREASE,
    amount: n,
});

export const decrease = (n) => ({
    type: DECREASE,
    amount: n,
});
