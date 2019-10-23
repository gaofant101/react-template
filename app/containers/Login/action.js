export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
export const SET_LOGOUT_STATUS = 'SET_LOGOUT_STATUS';

// 登陆
// TODO（高凡）：登录示例
// feature1016 新增：通过访问一个接口判断登录状态
export const loginAction = () => (dispatch) => {
    dispatch({
        type: SET_LOGIN_STATUS,
    });
};

// 登出
// TODO（高凡）：登录示例
export const logoutAction = () => (dispatch) => {
    setTimeout(() => {
        dispatch({
            type: SET_LOGOUT_STATUS,
        });
    }, 500);
};
