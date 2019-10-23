import CryptoJS from 'crypto-js';

const key = CryptoJS.enc.Latin1.parse('dbapp@anheng2018');
const iv = CryptoJS.enc.Latin1.parse('dbapp@anheng2018');

const encrypt = (data) =>
    CryptoJS.AES.encrypt(data, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding,
    }).toString();

export default encrypt;
