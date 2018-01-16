import axios from 'axios';
import qs from 'qs';
import config from './config';

axios.interceptors.request.use((configs) =>
    configs
, (error) =>
    Promise.reject(error)
);

axios.interceptors.response.use((response) =>
    response
, (error) =>
    Promise.reject(error)
);
/**
 * [axios 请求前]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
const checkStatus = (response) => {
    if (response.status === 200 || response.status === 304) {
        return response;
    }
    return Promise.reject('请求失败');
};
/**
 * [axios 接受数据]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
const checkCode = (response) => {
    // 示例错误代码检测
    if (response.data.errorCode === '1001') {
        // do something 参数错误
        // return Promise.reject('提示错误信息')
    }
    return response.data;
};

export default {
    get(url, params) {
        return axios({
            method: 'get',
            url,
            params,
            timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
        }).then(checkStatus)
        .then(checkCode);
    },
    post(url, data) {
        return axios({
            method: 'post',
            url,
            data: qs.stringify(data),
            timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
        }).then(checkStatus)
        .then(checkCode);
    },
};
