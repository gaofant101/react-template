import axios from 'axios';
import qs from 'qs';
import config from './config';

// const codeMessage = {
//     200: '服务器成功返回请求的数据',
//     201: '新建或修改数据成功。',
//     202: '一个请求已经进入后台排队（异步任务）',
//     204: '删除数据成功。',
//     400: '发出的请求有错误，服务器没有进行新建或修改数据,的操作。',
//     401: '用户没有权限（令牌、用户名、密码错误）。',
//     403: '用户得到授权，但是访问是被禁止的。',
//     404: '发出的请求针对的是不存在的记录，服务器没有进行操作',
//     406: '请求的格式不可得。',
//     410: '请求的资源被永久删除，且不会再得到的。',
//     422: '当创建一个对象时，发生一个验证错误。',
//     500: '服务器发生错误，请检查服务器',
//     502: '网关错误',
//     503: '服务不可用，服务器暂时过载或维护',
//     504: '网关超时',
// };

axios.interceptors.request.use(
    (configs) => configs,
    (error) => Promise.reject(error),
);

axios.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
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
    throw String('error');
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
        })
            .then(checkStatus)
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
                'Content-Type':
                    'application/x-www-form-urlencoded; charset=UTF-8',
            },
        })
            .then(checkStatus)
            .then(checkCode);
    },
};
