import axios from 'axios';
import qs from 'qs';
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
    Promise.reject(error)
);

// Global axios defaults
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

/**
 * [axios 请求前]
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
const checkCode = (response) =>
    response.data;

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
        data: qs.stringify(data),
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
