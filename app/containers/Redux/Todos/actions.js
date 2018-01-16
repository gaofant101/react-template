import { ADD_TODO } from 'reduxs/constants';

export const addTodo = (text) => ({
    type: ADD_TODO,
    text,
});
