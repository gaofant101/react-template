import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from './constants';

export const addTodo = (text) => (
    {
        type: ADD_TODO,
        text,
    }
);

export const completeTodo = (index) => (
    {
        type: COMPLETE_TODO,
        index,
    }
);

export const setVisibilityFilter = (filter) => (
    {
        type: SET_VISIBILITY_FILTER,
        filter,
    }
);
