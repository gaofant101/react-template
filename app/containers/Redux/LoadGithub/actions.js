import { LOAD_GITHUB_DATA } from 'reduxs/constants';
import { getGithub } from 'services/api';

export const loadGitAction = (username) => (dispatch) => {
    getGithub(username)
        .then((data) => {
            dispatch({
                type: LOAD_GITHUB_DATA,
                data,
            });
        })
        .catch((err) => {
            dispatch({
                type: LOAD_GITHUB_DATA,
                data: err,
            });
        });
};
