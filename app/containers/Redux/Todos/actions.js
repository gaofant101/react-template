import { ADD_TODO } from 'reduxX/constants';

export const addTodo = (text) => ({
    type: ADD_TODO,
    text,
});
