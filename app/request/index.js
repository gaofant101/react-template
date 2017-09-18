import { Modal } from 'antd';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { isOAuth } from '../utils/isOAuth';
// import qs from 'qs';
import configs from './config';
// import { b64EncodeUnicode } from '../utils/b64EncodeUnicode'

axios.interceptors.request.use((config) =>
    config,
(error) =>
    Promise.reject(error)
);

axios.interceptors.response.use((response) =>
    response,
(error) =>
    Promise.reject('失败', error)
);

// Global axios defaults
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

// 计数器
let count = 0;
function warning(title, content) {
    Modal.warning({
        title,
        content,
        okText: '确认',
        onOk,
    });
}

function onOk() {
    count = 0;
    isOAuth.removeOAuth('username', '/');
    isOAuth.removeOAuth('password', '/');
    isOAuth.removeOAuth('userid', '/');
    isOAuth.removeOAuth('token', '/');
    setTimeout(() => {
        browserHistory.replace('/Login');
    }, 0);
}

/**
 * [axios 判断网络状态]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
const checkStatus = (response) =>
    response.status >= 200 && response.status < 300 ? response : Promise.reject('请求失败');

/**
 * [axios 接收数据,并检查状态]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
const checkCode = (response) => {
    const code = response.data.Code;
    if (code && count < 1) {
        count += 1;
        if (code === 1001) {
            warning('请求不合法', '请重新登录!');
        } else if (code === 1002) {
            warning('登录超时', '请重新登录!');
        } else if (code === 1003) {
            warning('账号在其他地方登录', '请重新登录!');
        }
    }
    return response.data;
};

const get = (url, params) =>
    axios({
        method: 'get',
        url,
        params,
        timeout: configs.timeout,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
    })
    .then(checkStatus)
    .then(checkCode);

const post = (url, data) =>
    axios({
        method: 'post',
        url,
        data,
        timeout: configs.timeout,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
    })
    .then(checkStatus)
    .then(checkCode);

export default {
    get,
    post,
};
