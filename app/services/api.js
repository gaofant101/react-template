import request from '@utils/request';

export const getGitHub = (username) =>
    request(`https://api.github.com/users/${username}/repos?type=all&sort=updated?name='welcome'`, {
        cache: 'no-cache',
        headers: {
            'content-type': 'application/json',
        },
        method: 'GET',
    });

export const getApiIO = () =>
    request('http://apis.io/api/apis', {
        method: 'GET',
        cache: 'no-cache',
        // headers: {
        //     'content-type': 'application/json',
        // },
        // credentials: 'include',
    });
