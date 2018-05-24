/**
 * [requestLoggedUserAction description]
 * @return {[type]} [登入]
 */
export const requestLoggedUserAction = () => (dispatch) => {
    setTimeout(() => {
        dispatch({
            type: 'SET_LOGGED_USER',
        });
    }, 500);
};

/**
 * [requestLogOutUserAction description]
 * @return {[type]} [登出]
 */
export const requestLogOutUserAction = () => (dispatch) => {
    setTimeout(() => {
        dispatch({
            type: 'LOGOUT_LOGGED_USER',
        });
    }, 500);
};
