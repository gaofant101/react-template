export const getAuthenticated = () => sessionStorage.getItem('isAuthenticated');

export const setAuthenticated = (bool) => {
    const state = bool === 'true' ? 'true' : 'false';
    return sessionStorage.setItem('isAuthenticated', state);
};
