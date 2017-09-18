// https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/LocalStorage
export default {
    polyfill() {
        if (!window.localStorage) {
            Object.defineProperty(window, 'localStorage', new (function localStorage() {
                const aKeys = [];
                const oStorage = {};
                Object.defineProperty(oStorage, 'getItem', {
                    value(sKey) {
                        return sKey ? this[sKey] : null;
                    },
                    writable: false,
                    configurable: false,
                    enumerable: false,
                });
                Object.defineProperty(oStorage, 'key', {
                    value(nKeyId) {
                        return aKeys[nKeyId];
                    },
                    writable: false,
                    configurable: false,
                    enumerable: false,
                });
                Object.defineProperty(oStorage, 'setItem', {
                    value(sKey, sValue) {
                        if (!sKey) {
                            return;
                        }
                        document.cookie = `${escape(sKey)}=${escape(sValue)}; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/`;
                    },
                    writable: false,
                    configurable: false,
                    enumerable: false,
                });
                Object.defineProperty(oStorage, 'length', {
                    get() {
                        return aKeys.length;
                    },
                    configurable: false,
                    enumerable: false,
                });
                Object.defineProperty(oStorage, 'removeItem', {
                    value(sKey) {
                        if (!sKey) {
                            return;
                        }
                        document.cookie = `${escape(sKey)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
                    },
                    writable: false,
                    configurable: false,
                    enumerable: false,
                });
                this.get = function get() {
                    let iThisIndx = 0;
                    /* eslint-disable */
                    for (const sKey in oStorage) {
                        iThisIndx = aKeys.indexOf(sKey);
                        if (iThisIndx === -1) {
                            oStorage.setItem(sKey, oStorage[sKey]);
                        } else {
                            aKeys.splice(iThisIndx, 1);
                        }
                        delete oStorage[sKey];
                    }
                    /* eslint-enable */
                    for (aKeys; aKeys.length > 0; aKeys.splice(0, 1)) {
                        oStorage.removeItem(aKeys[0]);
                    }
                    for (let aCouple, iKey, nIdx = 0, aCouples = document.cookie.split(/\s*;\s*/); nIdx < aCouples.length; nIdx += 1) {
                        aCouple = aCouples[nIdx].split(/\s*=\s*/);
                        if (aCouple.length > 1) {
                            oStorage[iKey = unescape(aCouple[0])] = unescape(aCouple[1]);
                            aKeys.push(iKey);
                        }
                    }
                    return oStorage;
                };
                this.configurable = false;
                this.enumerable = true;
            })());
        }
    },
};
