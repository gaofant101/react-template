import { LOAD_GITHUB_DATA } from 'reduxs/constants';

const initialState = {
    GitHubData: [],
};

export const loadGit = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GITHUB_DATA:
            return Object.assign({}, state, {
                GitHubData: [].concat(action.data),
            });
        default:
            return state;
    }
};
