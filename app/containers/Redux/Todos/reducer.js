import { ADD_TODO } from 'reduxX/constants';

const initialState = {
    TodoList: [],
};

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                TodoList: [
                    ...state.TodoList, {
                        id: Date.now(),
                        text: action.text,
                    },
                ],
            });
        default:
            return state;
    }
};
