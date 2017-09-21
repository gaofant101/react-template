import { GETASYNCDATA, CLEARASYNCDATA } from '../../reduxs/actionTypes';

export const getdata = (json) => ({
    type: GETASYNCDATA,
    data: json,
});

export const cleardata = () => ({
    type: CLEARASYNCDATA,
    data: [],
});
